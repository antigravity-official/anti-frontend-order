import { Fragment } from 'react'

import { OrderProduct as OrderProductTypes } from '../../../types/ordersTypes'

interface OrderProductProps {
  orderProductData: OrderProductTypes
}

const OrderProduct = ({ orderProductData }: OrderProductProps) => {
  return (
    <>
      <p>상품명: {orderProductData.name}</p>
      <p>가격: {orderProductData.price}원</p>
      <p>
        주문정보: {orderProductData.stock.color}/${orderProductData.stock.band}/${orderProductData.stock.cup} $
        {orderProductData.stock.quantity}개
      </p>
    </>
  )
}

export default OrderProduct
