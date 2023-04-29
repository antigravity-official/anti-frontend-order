import { Shipping as ShippingTypes } from 'types/ordersTypes'

interface ShippingProps {
  shippingData: ShippingTypes
}

const Shipping = ({ shippingData }: ShippingProps) => {
  const { trackingNumber, shippingFee, post, address, message } = shippingData

  return (
    <>
      <p>송장번호: {trackingNumber}</p>
      <p>배송료: {shippingFee}원</p>
      <p>
        주소: [{post}] {address}
      </p>
      <p>메시지: {message}</p>
    </>
  )
}

export default Shipping
