import { OrderInfo as OrderInfoTypes } from 'types/ordersTypes'

interface OrderInfoProps {
  orderInfoData: OrderInfoTypes
}

const OrderInfo = ({ orderInfoData }: OrderInfoProps) => {
  const { id, orderAt, amount } = orderInfoData

  return (
    <>
      <p>주문번: {id}</p>
      <p>주문일: {orderAt.toString()}</p>
      <p>총 결제금액: ${amount}원</p>
    </>
  )
}

export default OrderInfo
