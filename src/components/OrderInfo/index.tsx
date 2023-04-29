import { OrderInfo as OrderInfoTypes } from 'types/ordersTypes'

import styles from './orderInfo.module.scss'

interface OrderInfoProps {
  orderInfoData: OrderInfoTypes
}

const OrderInfo = ({ orderInfoData }: OrderInfoProps) => {
  const { id, orderAt, amount } = orderInfoData

  return (
    <div className={styles.orderInfoBox}>
      <p>주문번: {id}</p>
      <p>주문일: {orderAt.toString()}</p>
      <p>총 결제금액: ${amount}원</p>
    </div>
  )
}

export default OrderInfo
