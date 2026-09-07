-- TSURIPEDIA initial CMS schema
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('owner','admin','editor')),
  display_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.fish (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  english_name text,
  scientific_name text,
  description text not null default '',
  season text,
  size_text text,
  depth_text text,
  danger_text text,
  difficulty int not null default 1 check (difficulty between 1 and 5),
  months int[] not null default '{}',
  methods text[] not null default '{}',
  areas text[] not null default '{}',
  model_path text,
  cover_image_path text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.methods (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null default '',
  target_fish text[] not null default '{}',
  place_type text,
  difficulty_text text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.spots (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  prefecture text,
  description text not null default '',
  latitude double precision,
  longitude double precision,
  target_fish text[] not null default '{}',
  has_parking boolean not null default false,
  has_toilet boolean not null default false,
  family_friendly boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gear (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  description text not null default '',
  affiliate_url text,
  disclosure_text text default '広告・アフィリエイトリンクを含みます',
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.fish enable row level security;
alter table public.methods enable row level security;
alter table public.spots enable row level security;
alter table public.gear enable row level security;
