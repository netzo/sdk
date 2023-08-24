<script setup>
import SectionDocsCards from '@theme/components/sections/SectionDocsCards.vue'
import en from '~/locales/en.js'
const item = en.components.find(({ uid }) => uid === 'iconbutton')
</script>

<div class="mb-5 w-75px h-75px"  :class="item.icon" />

# `NIconButton`

{{ item.description }}

## Usage

```tsx
import { NIconButton } from 'netzo/ui/components/mod.ts'

export default () => <NIconButton />
```

## Configuration

```ts
interface NIconButtonProps { }
```