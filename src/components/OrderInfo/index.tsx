import { OrderInfo as OrderInfoTypes } from '../../types/ordersTypes'

interface OrderInfoProps {
  orderInfoData: OrderInfoTypes
}

const OrderInfo = ({ orderInfoData }: OrderInfoProps) => {
  return (
    <>
      <p>주문번: {orderInfoData.id}</p>
      {/* <p>주문일: {orderInfo.orderAt}</p> */}
      <p>총 결제금액: ${orderInfoData.amount}원</p>
    </>
  )
}

export default OrderInfo
