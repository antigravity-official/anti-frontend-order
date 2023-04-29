import { Shipping as ShippingTypes } from '../../types/ordersTypes'

interface ShippingProps {
  shippingData: ShippingTypes
}

const Shipping = ({ shippingData }: ShippingProps) => {
  return (
    <>
      <p>송장번호: {shippingData.trackingNumber}</p>
      <p>배송료: {shippingData.shippingFee}원</p>
      <p>
        주소: [{shippingData.post}] {shippingData.address}
      </p>
      <p>메시지: {shippingData.message}</p>
    </>
  )
}

export default Shipping
