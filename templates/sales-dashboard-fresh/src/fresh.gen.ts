// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/index.tsx";
import * as $$0 from "./islands/ChartCard.tsx";
import * as $$1 from "./islands/MetricCard.tsx";
import * as $$2 from "./islands/Shell.tsx";
import * as $$3 from "./islands/TableCard.tsx";

const manifest = {
  routes: {
    "./routes/index.tsx": $0,
  },
  islands: {
    "./islands/ChartCard.tsx": $$0,
    "./islands/MetricCard.tsx": $$1,
    "./islands/Shell.tsx": $$2,
    "./islands/TableCard.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
