CREATE TABLE "follows" (
  "following_users" integer,
  "followed_users" integer,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "partners" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "description" text,
  "images" UUID,
  "discord" varchar(2048),
  "url" varchar(2048),
  "users" UUID,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "users" (
  "id" UUID UNIQUE PRIMARY KEY,
  "username" varchar NOT NULL,
  "role" varchar DEFAULT 'member',
  "email" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "posts" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "body" text,
  "users" UUID,
  "like" integer NOT NULL DEFAULT 0,
  "dislike" integer NOT NULL DEFAULT 0,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "comments" (
  "id" UUID UNIQUE PRIMARY KEY,
  "users" UUID,
  "like" integer NOT NULL DEFAULT 0,
  "dislike" integer NOT NULL DEFAULT 0,
  "body" text,
  "images" UUID,
  "videos" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "packs" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar UNIQUE NOT NULL,
  "users" UUID,
  "versions" UUID,
  "customers" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "mods" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar UNIQUE NOT NULL,
  "users" UUID,
  "versions" UUID,
  "customers" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "informations" (
  "id" UUID UNIQUE PRIMARY KEY,
  "versions" UUID,
  "descriptions" text,
  "images" UUID,
  "videos" UUID,
  "monthly_price" decimal NOT NULL DEFAULT 0,
  "price" decimal NOT NULL DEFAULT 0,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "images" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "alt" varchar NOT NULL,
  "url" varchar(2048) NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "videos" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar,
  "url" varchar(2048) NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "versions" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar(512) NOT NULL,
  "description" text,
  "url" varchar(2048) NOT NULL,
  "video" varchar(2048),
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "models" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "users" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "engines" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "users" UUID,
  "configurations" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "wheels" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "configurations" UUID,
  "files" UUID,
  "users" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "configurations" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "files" UUID,
  "users" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "3ds" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "files" UUID,
  "users" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "sounds" (
  "id" UUID UNIQUE PRIMARY KEY,
  "title" varchar NOT NULL,
  "files" UUID,
  "users" UUID,
  "configurations_id" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "files" (
  "id" UUID UNIQUE PRIMARY KEY,
  "directory" varchar UNIQUE NOT NULL,
  "file_size" integer,
  "title" varchar,
  "users" UUID,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

COMMENT ON COLUMN "posts"."body" IS 'Content of the post';

ALTER TABLE "follows" ADD FOREIGN KEY ("following_users") REFERENCES "users" ("id");

ALTER TABLE "follows" ADD FOREIGN KEY ("followed_users") REFERENCES "users" ("id");

ALTER TABLE "partners" ADD FOREIGN KEY ("images") REFERENCES "images" ("id");

ALTER TABLE "partners" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("images") REFERENCES "images" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("videos") REFERENCES "videos" ("id");

ALTER TABLE "packs" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "packs" ADD FOREIGN KEY ("versions") REFERENCES "versions" ("id");

ALTER TABLE "packs" ADD FOREIGN KEY ("customers") REFERENCES "users" ("id");

ALTER TABLE "mods" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "mods" ADD FOREIGN KEY ("versions") REFERENCES "versions" ("id");

ALTER TABLE "mods" ADD FOREIGN KEY ("customers") REFERENCES "users" ("id");

ALTER TABLE "informations" ADD FOREIGN KEY ("versions") REFERENCES "versions" ("id");

ALTER TABLE "informations" ADD FOREIGN KEY ("images") REFERENCES "images" ("id");

ALTER TABLE "informations" ADD FOREIGN KEY ("videos") REFERENCES "videos" ("id");

ALTER TABLE "models" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "engines" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "engines" ADD FOREIGN KEY ("configurations") REFERENCES "configurations" ("id");

ALTER TABLE "wheels" ADD FOREIGN KEY ("configurations") REFERENCES "configurations" ("id");

ALTER TABLE "wheels" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "wheels" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "configurations" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "configurations" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "3ds" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "3ds" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "sounds" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "sounds" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "sounds" ADD FOREIGN KEY ("configurations_id") REFERENCES "configurations" ("id");

ALTER TABLE "files" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");
