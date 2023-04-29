import { Shipping as ShippingTypes } from 'types/ordersTypes'

import styles from './shipping.module.scss'

interface ShippingProps {
  shippingData: ShippingTypes
}

const Shipping = ({ shippingData }: ShippingProps) => {
  const { trackingNumber, shippingFee, post, address, message } = shippingData

  return (
    <div className={styles.shippingBox}>
      <p>[배송정보]</p>
      <p>송장번호: {trackingNumber}</p>
      <p>배송료: {shippingFee}원</p>
      <p>
        주소: [{post}] {address}
      </p>
      <p>메시지: {message}</p>
    </div>
  )
}

export default Shipping
