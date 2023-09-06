# Nuxt Tapfiliate

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt 3 Module to integrate Tapfiliate.js into your Nuxt 3 app

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-tapfiliate` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-tapfiliate

# Using yarn
yarn add --dev nuxt-tapfiliate

# Using npm
npm install --save-dev nuxt-tapfiliate
```

2. Add `nuxt-tapfiliate` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-tapfiliate'
  ]
})
```

Then, you must add the accountId to the module options:

```
tapfiliate: {
  accountId: ''
}
```

That's it! You can now use Nuxt Tapfiliate in your Nuxt app ✨

You can easily check that the script is correctly injected by inspecting your page on your browser. Note that nothing is injected if the accountID is missing!
Also make sure that tracking is working correctly by doing manual tests.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

