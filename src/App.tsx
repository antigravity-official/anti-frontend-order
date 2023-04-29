import { Fragment } from 'react'

import useGetOrdersQuery from './hooks/useGetOrdersQuery'
import { OrderProduct as OrderProductTypes, Shipping as ShippingTypes } from './types/ordersTypes'
import OrderInfo from './components/OrderInfo'
import OrderProduct from './components/OrderProduct'
import Shipping from './components/Shipping'

const App = () => {
  const { isLoading, data: ordersData } = useGetOrdersQuery()

  if (isLoading || !ordersData) {
    return <div>Loading...</div>
  }

  const orderInfoData = {
    id: ordersData.id,
    orderAt: new Date(ordersData.orderAt),
    amount: ordersData.amount,
  }

  const shippingOrderProducData: { shipping: ShippingTypes; products: OrderProductTypes[] }[] = [
    {
      shipping: ordersData.shipping,
      products: ordersData.products,
    },
  ]

  return (
    <>
      <OrderInfo orderInfoData={orderInfoData} />
      {shippingOrderProducData.map((data, index) => {
        const dataKey = `data-${index}`
        const shippingData = data.shipping
        const orderProductData = data.products

        return (
          <Fragment key={dataKey}>
            <Shipping shippingData={shippingData} />
            <OrderProduct orderProductData={orderProductData} />
          </Fragment>
        )
      })}
    </>
  )
}

export default App
