import { OrderProduct as OrderProductTypes } from 'types/ordersTypes'

import styles from './orderProduct.module.scss'

interface OrderProductProps {
  orderProductData: OrderProductTypes
}

const OrderProduct = ({ orderProductData }: OrderProductProps) => {
  const {
    name,
    price,
    stock: { color, band, cup, quantity },
  } = orderProductData

  return (
    <li className={styles.orderProductBox}>
      <p>상품명: {name}</p>
      <p>가격: {price}원</p>
      <p>
        주문정보: {color}/${band}/${cup} ${quantity}개
      </p>
    </li>
  )
}

export default OrderProduct
