import useGetOrdersQuery from './hooks/useGetOrdersQuery'
import { OrderProduct as OrderProductTypes, Shipping as ShippingTypes } from './types/ordersTypes'
import OrderInfo from './components/OrderInfo'
import Shipping from './components/Shipping'
import OrderBundle from './components/OrderBundle'
import OrderProducts from './components/OtherProducts'

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

  const orderBundleData: { shipping: ShippingTypes; products: OrderProductTypes[] }[] = [
    {
      shipping: ordersData.shipping,
      products: ordersData.products,
    },
  ]

  return (
    <>
      <OrderInfo orderInfoData={orderInfoData} />
      {orderBundleData.map((orderBundle, index) => {
        const orderBundleKey = `orderBundle-${index}`
        const shippingData = orderBundle.shipping
        const orderProductDatas = orderBundle.products

        return (
          <OrderBundle key={orderBundleKey}>
            <Shipping shippingData={shippingData} />
            <OrderProducts orderProductDatas={orderProductDatas} />
          </OrderBundle>
        )
      })}
    </>
  )
}

export default App
