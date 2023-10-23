// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import { returnsNext, stub } from "std/testing/mock.ts";
import { fetchValues, getCursor, redirect } from "./http.ts";
import { assert, assertEquals, assertRejects } from "std/assert/mod.ts";
import { Status } from "$fresh/server.ts";
import { Item, randomItem } from "./db.ts";

Deno.test("[auth/http] redirect() defaults", () => {
  const location = "/hello-there";

  const resp = redirect(location);
  assert(!resp.ok);
  assertEquals(resp.body, null);
  assertEquals(resp.headers.get("location"), location);
  assertEquals(resp.status, 303);
});

Deno.test("[auth/http] redirect()", () => {
  const location = "/hello-there";
  const status = 302;

  const resp = redirect(location, status);
  assert(!resp.ok);
  assertEquals(resp.body, null);
  assertEquals(resp.headers.get("location"), location);
  assertEquals(resp.status, status);
});

Deno.test("[auth/http] getCursor()", () => {
  assertEquals(getCursor(new URL("http://example.com")), "");
  assertEquals(getCursor(new URL("http://example.com?cursor=here")), "here");
});

Deno.test("[auth/http] fetchValues()", async () => {
  const resp1 = Promise.resolve(
    new Response(null, { status: Status.NotFound }),
  );
  const resp2Body = {
    values: [randomItem(), randomItem()],
    cursor: crypto.randomUUID(),
  };
  const resp2Cursor = crypto.randomUUID();
  const resp2 = Promise.resolve(Response.json(resp2Body));
  const fetchStub = stub(
    globalThis,
    "fetch",
    returnsNext([resp1, resp2]),
  );
  const endpoint = "http://localhost";
  await assertRejects(
    async () => await fetchValues(endpoint, ""),
    Error,
    `Request failed: GET ${endpoint}`,
  );
  assertEquals(
    await fetchValues<Item>(endpoint + "/api/items", resp2Cursor),
    resp2Body,
  );

  fetchStub.restore();
});
