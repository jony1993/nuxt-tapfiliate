import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import Tap from "@tapfiliate/tapfiliate-js";

export default defineNuxtPlugin(() => {

  // get the options from the runtime config
  const { tapfiliate: options } = useRuntimeConfig().public

  // Initialize the Tapfiliate client
  const tapfiliate = Tap.init(options.accountId);

  // Add the Tapfiliate client to the context
  return {
    provide: {
      tapfiliate
    }
  }
})
