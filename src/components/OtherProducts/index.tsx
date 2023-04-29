import { OrderProduct as OrderProductTypes } from 'types/ordersTypes'
import OrderProduct from './OrderProduct'

interface OrderInfoProps {
  orderProductDatas: OrderProductTypes[]
}

const OrderProducts = ({ orderProductDatas }: OrderInfoProps) => {
  return (
    <ul>
      <p>[상품목록]</p>
      {orderProductDatas.map((orderProductData, index) => {
        const orderProductKey = `orderProduct-${index}`

        return <OrderProduct key={orderProductKey} orderProductData={orderProductData} />
      })}
    </ul>
  )
}

export default OrderProducts
