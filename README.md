# Nuxt Tapfiliate

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Integration Tapfiliate.js into your nuxt 3 app

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

Setup Tapfiliate Script within your nuxt 3 App

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

Add tapfiliate accountId to your config

```
tapfiliate: {
  accountId: ''
}
```

That's it! You can now use Nuxt Tapfiliate in your Nuxt app ✨

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
