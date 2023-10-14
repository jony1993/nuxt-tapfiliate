import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import Tap from "@tapfiliate/tapfiliate-js";

export default defineNuxtPlugin(() => {

  // get the options from the runtime config
  const { tapfiliate: options } = useRuntimeConfig().public

  // Init the Tap client
  Tap.init(options.accountId);

  // Initialize the Tapfiliate client
  const tapfiliate = Tap

  // Add the Tapfiliate client to the context
  return {
    provide: {
      tapfiliate
    }
  }
})
