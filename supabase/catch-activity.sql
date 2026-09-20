-- Additive migration. User catches and existing RLS policies are not modified.
create table if not exists public.external_catches (
 id text primary key,
 date date not null,
 fish_slug text not null,
 spot_slug text not null,
 method_slug text,
 size_cm numeric check (size_cm > 0 and size_cm <= 500),
 signal jsonb not null,
 created_at timestamptz not null default now()
);
create index if not exists external_catches_recent on public.external_catches(date desc,spot_slug,fish_slug);
alter table public.external_catches enable row level security;
revoke all on public.external_catches from anon, authenticated;
grant all on public.external_catches to service_role;
create table if not exists public.catch_import_runs (
 id bigint generated always as identity primary key,
 source text not null,
 status text not null check (status in ('success','failed')),
 inserted integer not null default 0,
 invalid integer not null default 0,
 finished_at timestamptz not null default now()
);
alter table public.catch_import_runs enable row level security;
revoke all on public.catch_import_runs from anon, authenticated;
grant all on public.catch_import_runs to service_role;
grant usage,select on sequence public.catch_import_runs_id_seq to service_role;
create index if not exists catch_reports_activity on public.catch_reports(caught_on, id)
 where status='approved' and deleted_at is null and upload_complete=true;
