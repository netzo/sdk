import { RESPONSES } from "../utils.ts";
import { defineHook } from "./mod.ts";

export type AuthenticateOptions = {
  /** The API key to use for authenticating requests.
   * IMPORTANT: set "apiKey" using Deno.env.get(...) to keep it secret  */
  apiKey?: string;
};

/**
 * A hook that authenticates requests using the provided API key
 * by checking the "x-api-key" header or "apiKey" query parameter.
 *
 * @param options {AuthenticateOptions} - options object (defaults to Deno.env.get("NETZO_API_KEY"))
 * @returns a hook function
 */
export const authenticate = (options: AuthenticateOptions) => {
  return defineHook(async (ctx, next) => {
    const { apiKey = Deno.env.get("NETZO_API_KEY")! } = options;

    if (!apiKey) return await next();

    const origin = ctx.req.headers.get("origin")!; // e.g. https://my-project-906698.netzo.io
    const referer = ctx.req.headers.get("referer")!; // SOMETIMES SET e.g. https://app.netzo.io/some-path

    // skip if request is from same origin or referer (to allow fetch within app)
    const sameOrigin = origin && ctx.url.origin === origin;
    const sameReferer = referer && referer?.startsWith(ctx.url.origin);
    if (sameOrigin || sameReferer) return await ctx.next();

    // API key authentication
    const apiKeyHeader = ctx.req.headers.get("x-api-key");
    const apiKeySearchParams = ctx.url.searchParams.get("apiKey");
    const apiKeyValue = apiKeyHeader || apiKeySearchParams;
    if (!apiKeyValue) return RESPONSES.missingApiKey();
    if (apiKeyValue !== apiKey) return RESPONSES.invalidApiKey();
    ctx.url.searchParams.delete("apiKey"); // remove apiKey from query

    await next();
  });
};
