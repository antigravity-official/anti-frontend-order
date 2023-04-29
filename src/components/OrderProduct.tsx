import { Fragment } from 'react'

import { OrderProduct as OrderProductTypes } from '../types/ordersTypes'

interface OrderInfoProps {
  orderProductData: OrderProductTypes[]
}

const OrderProduct = ({ orderProductData }: OrderInfoProps) => {
  return (
    <>
      <p>[상품목록]</p>
      {orderProductData.map((orderProduct, index) => {
        const orderProductKey = `orderProduct-${index}`

        return (
          <Fragment key={orderProductKey}>
            <p>상품명: {orderProduct.name}</p>
            <p>가격: {orderProduct.price}원</p>
            <p>
              주문정보: {orderProduct.stock.color}/${orderProduct.stock.band}/${orderProduct.stock.cup} $
              {orderProduct.stock.quantity}개
            </p>
          </Fragment>
        )
      })}
    </>
  )
}

export default OrderProduct
