interface OrderBunldeProps {
  children: JSX.Element[]
}

const OrderBundle = ({ children }: OrderBunldeProps) => {
  const shippingComponent = children.filter((item) => item.props.shippingData)
  const orderProductComponent = children.filter((item) => item.props.orderProductData)

  return (
    <>
      <p>[배송정보]</p>
      {shippingComponent}
      <p>[상품목록]</p>
      {orderProductComponent}
    </>
  )
}

export default OrderBundle
