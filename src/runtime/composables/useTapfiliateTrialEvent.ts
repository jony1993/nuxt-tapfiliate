import { useNuxtApp } from '#imports'

/**
 * Manually track trial events
 *
 * @example
 * useTapfiliateTrialEvent('cus_1234')
 */
export function useTapfiliateTrialEvent(
  customer_id: string
) {
  if (process.client) {
    useNuxtApp().$tapfiliate.trial(customer_id)
  }
}
