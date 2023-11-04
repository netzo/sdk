import type { Plugin } from "$fresh/server.ts";
import { isGitHubSetup } from "../utils/providers/github.ts";
import { redirect } from "netzo/plugins/auth/utils/http.ts";

export const welcome = (): Plugin => {
  return {
    name: "welcome",
    middlewares: [{
      path: "/",
      middleware: {
        handler: async (req, ctx) => {
          const { pathname } = new URL(req.url);
          return !isGitHubSetup() && pathname !== "/auth/welcome" &&
              ctx.destination === "route"
            ? redirect("/auth/welcome")
            : await ctx.next();
        },
      },
    }],
  } as Plugin;
};
