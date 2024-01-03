import { defineRoute } from "$fresh/server.ts";
import type { Account } from "@/components/tables/accounts/data/schema.ts";
import { getOptions } from "@/components/tables/accounts/data/options.tsx";
import { Table } from "@/islands/accounts/Table.tsx";
import { app } from "@/netzo.ts";

export default defineRoute(async (req, ctx) => {
  const data = await app.db.find<Account>("accounts");

  if (!data) return ctx.renderNotFound();

  const options = getOptions(data);

  return <Table data={data} options={options} />;
});