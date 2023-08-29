<img src="https://raw.githubusercontent.com/netzo/netzo/main/assets/plugins/netzoAppLayout.svg" alt="netzo/ui/plugins/netzoAppLayout" class="mb-5 w-75px">

# `netzoAppLayout`

Adds a global layout route from which all other routes inherit from.

- **labels:** `middleware`, `auth`, `netzo`

## Usage

Register the plugin in `fresh.config.ts` and ensure `main.ts` and `dev.ts` are receive the `config` object as shown below.

::: code-group
```ts [fresh.config.ts]
import { netzoAppLayout } from 'netzo/ui/plugins/netzoAppLayout/mod.ts'

await start(manifest, {
  plugins: [netzoAppLayout()]
})
```
<<< src/main.ts
<<< src/dev.ts
:::

::: warning Fresh configuration [must](https://fresh.deno.dev/docs/concepts/ahead-of-time-builds#migrating-existing-projects-with-plugins) be defined in `fresh.config.ts`.
:::

## Configuration

```ts
interface NetzoAppLayoutOptions {
  title?: string
  description?: string
  favicon?: string
}
```