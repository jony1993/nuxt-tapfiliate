import { defu } from 'defu'
import { addImports, defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
  * Tapfiliate accountId
  * @default process.env.TAPFILIATE_ACCOUNT_ID
  * @example 'eyJp....'
  * @type string
  */
  accountId: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-tapfiliate',
    configKey: 'tapfiliate'
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Make sure user id hash is set
    if (!options.accountId) {
      console.warn('Missing `TAPFILIATE_ACCOUNT_ID` in `.env`')
    }

    // Add module options to public runtime config
    nuxt.options.runtimeConfig.public.tapfiliate = defu(nuxt.options.runtimeConfig.public.tapfiliate, {
      accountId: options.accountId
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugins/plugin.client'))

    // Install composables
    addImports({
      name: 'useTapfiliateConversionEvent',
      as: 'useTapfiliateConversionEvent',
      from: resolver.resolve('runtime/composables/useTapfiliateConversionEvent')
    })

    addImports({
      name: 'useTapfiliateTrialEvent',
      as: 'useTapfiliateTrialEvent',
      from: resolver.resolve('runtime/composables/useTapfiliateTrialEvent')
    })
  }
})
