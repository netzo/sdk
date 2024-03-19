import type { Plugin } from "$fresh/server.ts";
import { apiKeyAuthentication } from "./middlewares/mod.ts";
import { getRoutesByCollection } from "./routes/mod.ts";

export type DbConfig = {
  /** A Deno KV instance to use for the database */
  kv: Deno.Kv;
  /** Wether to require authentication using the provided API key
   * in the "x-api-key" header or "apiKey" query parameter.
   * Defaults to Deno.env.get("NETZO_API_KEY"). */
  apiKey?: string;
  /** An array of database collections. */
  collections: {
    /** The name of the collection e.g. "users" `/api/users`. */
    name: string;
    /** The field name to use as the primary key. Defaults to "id". */
    idField?: string;
    /** The methods to enable. Defaults to all methods. */
    methods?: ("find" | "get" | "create" | "update" | "patch" | "remove")[];
  }[];
};

export const defineDbConfig = (config: DbConfig): DbConfig => config;

// deno-lint-ignore ban-types
export type DbState = {};

/**
 * A fresh plugin that registers middleware and handlers to
 * to mount RESTful API routes on the `/api` route path.
 *
 * - `GET /api/:collection` find all records matching query
 * - `GET /api/:collection/:id` get an entry by key
 * - `POST /api/:collection` create a new entry (auto-generates id)
 * - `PUT /api/:collection/:id` update an entry by key
 * - `PATCH /api/:collection/:id` patch an entry by key
 * - `DELETE /api/:collection/:id` remove an entry by key
 */
export const db = (config?: DbConfig): Plugin => {
  if (!config) return { name: "netzo.db" };

  config.apiKey ??= Deno.env.get("NETZO_API_KEY");
  config.collections ??= [];

  const dbRoutes = [
    ...config.collections
      .filter((collection) => !!collection?.name)
      .flatMap((collection) => getRoutesByCollection(collection, config)),
  ];

  return {
    name: "netzo.db",
    middlewares: [
      {
        path: "/api",
        middleware: {
          handler: apiKeyAuthentication(config),
        },
      },
    ],
    routes: dbRoutes,
  };
};