-- REVIEW BEFORE PRODUCTION EXECUTION. No migration is applied by the application.
create table if not exists public.catch_reports (
 id uuid primary key, spot_slug text not null, fish_slug text not null,
 caught_on date not null, time_band text not null, method_slug text,
 payload jsonb not null check (payload->>'source' = 'real'),
 photo_path text, token_hash text not null,
 status text not null default 'pending' check (status in ('pending','approved','rejected')),
 created_at timestamptz not null default now(), reviewed_at timestamptz
);
create index if not exists catch_reports_spot_recent on public.catch_reports(spot_slug,caught_on desc,created_at desc) where status='approved';
create index if not exists catch_reports_fish_date on public.catch_reports(fish_slug,caught_on desc) where status='approved';
create index if not exists catch_reports_moderation on public.catch_reports(status,created_at);
alter table public.catch_reports enable row level security;
revoke all on public.catch_reports from anon,authenticated;
grant all on public.catch_reports to service_role;
create table if not exists public.uolink_quotas(key text primary key, window_start timestamptz not null, count integer not null);
alter table public.uolink_quotas enable row level security;
revoke all on public.uolink_quotas from anon,authenticated;
create or replace function public.uolink_take_quota(p_key text,p_limit integer) returns boolean
language plpgsql security definer set search_path=public as $$
declare n integer;
begin
 delete from public.uolink_quotas where window_start < now()-interval '2 hours';
 insert into public.uolink_quotas(key,window_start,count) values(p_key,date_trunc('hour',now()),1)
 on conflict(key) do update set count=case when uolink_quotas.window_start=date_trunc('hour',now()) then uolink_quotas.count+1 else 1 end,window_start=date_trunc('hour',now()) returning count into n;
 return n<=least(greatest(p_limit,1),30);
end $$;
revoke all on function public.uolink_take_quota(text,integer) from public,anon,authenticated;
grant execute on function public.uolink_take_quota(text,integer) to service_role;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('catch-photos','catch-photos',false,500000,array['image/jpeg']) on conflict(id) do nothing;
-- No public Storage policy. Only approved report photos receive short-lived signed URLs.
-- Moderator checks photo, location permission, personal data, fish identity, spam before:
-- update public.catch_reports set status='approved',reviewed_at=now() where id='REVIEWED_UUID';
-- Rejected/old pending rows and their Storage objects should be removed per docs/platform-setup.md.
