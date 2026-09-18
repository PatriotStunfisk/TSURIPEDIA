-- Additive migration after catch-reports.sql. Existing anonymous records remain readable.
begin;
alter table public.catch_reports add column if not exists upload_complete boolean not null default true;
alter table public.catch_reports add column if not exists user_id uuid references auth.users(id) on delete set null;
alter table public.catch_reports add column if not exists photo_paths text[] not null default '{}';
alter table public.catch_reports add column if not exists fish_name text;
alter table public.catch_reports add column if not exists count integer check(count between 1 and 999);
alter table public.catch_reports add column if not exists size_cm numeric check(size_cm>0 and size_cm<=500);
alter table public.catch_reports add column if not exists released boolean;
alter table public.catch_reports add column if not exists deleted_at timestamptz;
alter table public.catch_reports alter column token_hash drop not null;
create index if not exists catch_reports_owner_recent on public.catch_reports(user_id,created_at desc,id desc);
create index if not exists catch_reports_method_date on public.catch_reports(method_slug,caught_on desc,spot_slug) where status='approved' and deleted_at is null;
create index if not exists catch_reports_fish_spot_date on public.catch_reports(fish_slug,caught_on desc,spot_slug) where status='approved' and deleted_at is null;
create index if not exists catch_reports_spot_created on public.catch_reports(spot_slug,created_at desc,id desc) where status='approved' and deleted_at is null;
create table if not exists public.catch_flags (
 id uuid primary key default gen_random_uuid(), report_id uuid not null references public.catch_reports(id) on delete cascade,
 user_id uuid references auth.users(id) on delete set null, reason text not null check(length(reason) between 1 and 300),
 created_at timestamptz not null default now(), resolved_at timestamptz, unique(report_id,user_id)
);
create table if not exists public.catch_moderators(user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.catch_flags enable row level security;
alter table public.catch_moderators enable row level security;
revoke all on public.catch_flags,public.catch_moderators from anon,authenticated;
grant all on public.catch_flags,public.catch_moderators to service_role;
-- Existing catch_reports and Storage remain inaccessible to anon/authenticated Data API calls.
-- Only server routes authenticate with Supabase Auth, authorize the owner/role and access rows.
commit;
