import { OrderProduct as OrderProductTypes } from 'types/ordersTypes'

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
    <>
      <p>상품명: {name}</p>
      <p>가격: {price}원</p>
      <p>
        주문정보: {color}/${band}/${cup} ${quantity}개
      </p>
    </>
  )
}

export default OrderProduct
