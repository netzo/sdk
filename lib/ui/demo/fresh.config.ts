import "std/dotenv/load.ts";
import { defineConfig } from "$fresh/server.ts";
import {
  htmx,
  netzoAuth,
  netzoErrorPages,
  unocss,
} from "netzo/ui/plugins/mod.ts";
import unoConfig from "./uno.config.ts";

export default defineConfig({
  plugins: [
    netzoAuth({ visibility: "public" }),
    netzoErrorPages(),
    unocss(unoConfig),
    htmx(),
  ],
});
