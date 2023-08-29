<img src="https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/netzoErrorPages.svg" alt="netzo/ui/plugins/netzoErrorPages" class="mb-5 w-75px">

# `netzoErrorPages`

Adds routes to render a custom error page for `404: Not Found` and `500: Server Error`.

- **labels:** `routes`, `error`, `netzo`

## Usage

Register the plugin in `fresh.config.ts` and ensure `main.ts` and `dev.ts` are receive the `config` object as shown below.

Note that the [`unocss`](/docs/netzo/ui/plugins/unocss) plugin must be registered as well for styles to work.

::: code-group
```ts [fresh.config.ts]
import { netzoErrorPages } from 'netzo/ui/plugins/netzoErrorPages/mod.ts'
import { unocss } from 'netzo/ui/plugins/unocss/mod.ts'

await start(manifest, {
  plugins: [netzoErrorPages(), unocss()]
})
```
<<< src/main.ts
<<< src/dev.ts
:::

::: warning Fresh configuration [must](https://fresh.deno.dev/docs/concepts/ahead-of-time-builds#migrating-existing-projects-with-plugins) be defined in `fresh.config.ts`.
:::

## Configuration

```ts
interface NetzoErrorPagesOptions {
  404?: boolean
  500?: boolean
}
```