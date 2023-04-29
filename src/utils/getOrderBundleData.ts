import { Order, OrderProduct as OrderProductTypes, Shipping as ShippingTypes } from 'types/ordersTypes'

const getOrderBundleData = (ordersData: Order) => {
  const orderBundleData: { shipping: ShippingTypes; products: OrderProductTypes[] }[] = [
    {
      shipping: ordersData.shipping,
      products: ordersData.products,
    },
  ]

  return orderBundleData
}

export default getOrderBundleData
