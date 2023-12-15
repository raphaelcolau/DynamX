CREATE TABLE "follows" (
  "following_user_id" integer,
  "followed_user_id" integer,
  "created_at" timestamp
);

CREATE TABLE "users" (
  "id" UUID PRIMARY KEY,
  "username" varchar,
  "role" varchar,
  "packs" UUID,
  "models" UUID,
  "files" UUID,
  "configurations" UUID,
  "sounds" UUID,
  "3ds" UUID,
  "created_at" timestamp
);

CREATE TABLE "posts" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "body" text,
  "user_id" UUID,
  "status" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "packs" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "users" UUID,
  "models" UUID,
  "customer" UUID,
  "informations" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "mods" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "users" UUID,
  "customer" UUID,
  "informations" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "informations" (
  "id" UUID PRIMARY KEY,
  "status" varchar,
  "versions" UUID,
  "descriptions" text,
  "images" UUID,
  "videos" UUID,
  "monthly_price" integer,
  "price" integer,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "images" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "alt" varchar,
  "url" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "videos" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "url" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "versions" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "description" text,
  "url" varchar,
  "video" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "models" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "users" UUID,
  "configurations" UUID,
  "dependencies" UUID,
  "informations" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "engines" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "users" UUID,
  "body" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "wheels" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "body" UUID,
  "files" UUID,
  "users" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "configurations" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "files" UUID,
  "users" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "3ds" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "files" UUID,
  "users" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "sounds" (
  "id" UUID PRIMARY KEY,
  "title" varchar,
  "files" UUID,
  "users" UUID,
  "body" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "files" (
  "id" UUID PRIMARY KEY,
  "directory" varchar,
  "file_size" integer,
  "title" varchar,
  "users" UUID,
  "created_at" timestamp,
  "updated_at" timestamp
);

COMMENT ON COLUMN "posts"."body" IS 'Content of the post';

CREATE TABLE "packs_users" (
  "packs_id" UUID,
  "users_packs" UUID,
  PRIMARY KEY ("packs_id", "users_packs")
);

ALTER TABLE "packs_users" ADD FOREIGN KEY ("packs_id") REFERENCES "packs" ("id");

ALTER TABLE "packs_users" ADD FOREIGN KEY ("users_packs") REFERENCES "users" ("packs");


CREATE TABLE "models_users" (
  "models_id" UUID,
  "users_models" UUID,
  PRIMARY KEY ("models_id", "users_models")
);

ALTER TABLE "models_users" ADD FOREIGN KEY ("models_id") REFERENCES "models" ("id");

ALTER TABLE "models_users" ADD FOREIGN KEY ("users_models") REFERENCES "users" ("models");


CREATE TABLE "files_users" (
  "files_id" UUID,
  "users_files" UUID,
  PRIMARY KEY ("files_id", "users_files")
);

ALTER TABLE "files_users" ADD FOREIGN KEY ("files_id") REFERENCES "files" ("id");

ALTER TABLE "files_users" ADD FOREIGN KEY ("users_files") REFERENCES "users" ("files");


CREATE TABLE "configurations_users" (
  "configurations_id" UUID,
  "users_configurations" UUID,
  PRIMARY KEY ("configurations_id", "users_configurations")
);

ALTER TABLE "configurations_users" ADD FOREIGN KEY ("configurations_id") REFERENCES "configurations" ("id");

ALTER TABLE "configurations_users" ADD FOREIGN KEY ("users_configurations") REFERENCES "users" ("configurations");


CREATE TABLE "sounds_users" (
  "sounds_id" UUID,
  "users_sounds" UUID,
  PRIMARY KEY ("sounds_id", "users_sounds")
);

ALTER TABLE "sounds_users" ADD FOREIGN KEY ("sounds_id") REFERENCES "sounds" ("id");

ALTER TABLE "sounds_users" ADD FOREIGN KEY ("users_sounds") REFERENCES "users" ("sounds");


CREATE TABLE "3ds_users" (
  "3ds_id" UUID,
  "users_3ds" UUID,
  PRIMARY KEY ("3ds_id", "users_3ds")
);

ALTER TABLE "3ds_users" ADD FOREIGN KEY ("3ds_id") REFERENCES "3ds" ("id");

ALTER TABLE "3ds_users" ADD FOREIGN KEY ("users_3ds") REFERENCES "users" ("3ds");


CREATE TABLE "users_packs" (
  "users_id" UUID,
  "packs_users" UUID,
  PRIMARY KEY ("users_id", "packs_users")
);

ALTER TABLE "users_packs" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");

ALTER TABLE "users_packs" ADD FOREIGN KEY ("packs_users") REFERENCES "packs" ("users");


ALTER TABLE "packs" ADD FOREIGN KEY ("models") REFERENCES "models" ("id");

ALTER TABLE "packs" ADD FOREIGN KEY ("customer") REFERENCES "users" ("id");

ALTER TABLE "packs" ADD FOREIGN KEY ("informations") REFERENCES "informations" ("id");

CREATE TABLE "users_mods" (
  "users_id" UUID,
  "mods_users" UUID,
  PRIMARY KEY ("users_id", "mods_users")
);

ALTER TABLE "users_mods" ADD FOREIGN KEY ("users_id") REFERENCES "users" ("id");

ALTER TABLE "users_mods" ADD FOREIGN KEY ("mods_users") REFERENCES "mods" ("users");


ALTER TABLE "mods" ADD FOREIGN KEY ("customer") REFERENCES "users" ("id");

ALTER TABLE "mods" ADD FOREIGN KEY ("informations") REFERENCES "informations" ("id");

ALTER TABLE "informations" ADD FOREIGN KEY ("versions") REFERENCES "versions" ("id");

ALTER TABLE "informations" ADD FOREIGN KEY ("images") REFERENCES "images" ("id");

ALTER TABLE "informations" ADD FOREIGN KEY ("videos") REFERENCES "videos" ("id");

ALTER TABLE "models" ADD FOREIGN KEY ("configurations") REFERENCES "configurations" ("id");

ALTER TABLE "models" ADD FOREIGN KEY ("dependencies") REFERENCES "sounds" ("id");

ALTER TABLE "models" ADD FOREIGN KEY ("informations") REFERENCES "informations" ("id");

ALTER TABLE "engines" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "engines" ADD FOREIGN KEY ("body") REFERENCES "configurations" ("id");

ALTER TABLE "wheels" ADD FOREIGN KEY ("body") REFERENCES "configurations" ("id");

ALTER TABLE "wheels" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "wheels" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "configurations" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "configurations" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "3ds" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "3ds" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "sounds" ADD FOREIGN KEY ("files") REFERENCES "files" ("id");

ALTER TABLE "sounds" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "sounds" ADD FOREIGN KEY ("body") REFERENCES "configurations" ("id");

ALTER TABLE "files" ADD FOREIGN KEY ("users") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "follows" ADD FOREIGN KEY ("following_user_id") REFERENCES "users" ("id");

ALTER TABLE "follows" ADD FOREIGN KEY ("followed_user_id") REFERENCES "users" ("id");
