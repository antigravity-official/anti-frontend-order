import { OrderProduct as OrderProductTypes } from 'types/ordersTypes'
import OrderProduct from '../OrderProduct'

interface OrderInfoProps {
  orderProductDatas: OrderProductTypes[]
}

const OrderProducts = ({ orderProductDatas }: OrderInfoProps) => {
  return (
    <>
      {orderProductDatas.map((orderProductData, index) => {
        const orderProductKey = `orderProduct-${index}`

        return <OrderProduct key={orderProductKey} orderProductData={orderProductData} />
      })}
    </>
  )
}

export default OrderProducts
