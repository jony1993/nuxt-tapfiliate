import { useNuxtApp } from '#imports'

/**
 * Manually track trial events
 *
 * @example
 * useTapfiliateConversionEvent('py_123', 100.0, { 'cus_1234' }, 'com_123')
 */
export function useTapfiliateConversionEvent(
  charge_id: string,
  amount: number,
  customer_id: string,
  commission_id: string
) {
  if (process.client) {
    useNuxtApp().$tapfiliate.conversion(charge_id, amount, { customer_id }, commission_id)
  }
}
