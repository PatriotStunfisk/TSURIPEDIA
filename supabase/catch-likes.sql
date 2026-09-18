-- Anonymous browser reactions. Service API only; no public visitor identifiers.
create table if not exists public.catch_likes (
 report_id uuid not null references public.catch_reports(id) on delete cascade,
 visitor_hash text not null check (length(visitor_hash)=64),
 created_at timestamptz not null default now(),
 primary key(report_id, visitor_hash)
);
alter table public.catch_likes enable row level security;
revoke all on public.catch_likes from anon, authenticated;
grant all on public.catch_likes to service_role;
create or replace function public.uolink_catch_like(p_report uuid,p_visitor text default null,p_liked boolean default null)
returns jsonb language plpgsql security invoker set search_path=public as $$
begin
 if not exists(select 1 from public.catch_reports where id=p_report and status='approved' and upload_complete and deleted_at is null) then return null; end if;
 if p_visitor is not null and p_liked is true then
  insert into public.catch_likes(report_id,visitor_hash) values(p_report,p_visitor) on conflict do nothing;
 elsif p_visitor is not null and p_liked is false then
  delete from public.catch_likes where report_id=p_report and visitor_hash=p_visitor;
 end if;
 return jsonb_build_object('count',(select count(*) from public.catch_likes where report_id=p_report),'liked',exists(select 1 from public.catch_likes where report_id=p_report and visitor_hash=p_visitor));
end $$;
revoke all on function public.uolink_catch_like(uuid,text,boolean) from public,anon,authenticated;
grant execute on function public.uolink_catch_like(uuid,text,boolean) to service_role;
