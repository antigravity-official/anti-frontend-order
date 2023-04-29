interface OrderBunldeProps {
  children: JSX.Element[]
}

const OrderBundle = ({ children }: OrderBunldeProps) => {
  const shippingComponent = children.filter((item) => item.props.shippingData)
  const orderProductsComponent = children.filter((item) => item.props.orderProductDatas)

  return (
    <>
      <p>[배송정보]</p>
      {shippingComponent}
      <p>[상품목록]</p>
      {orderProductsComponent}
    </>
  )
}

export default OrderBundle
