import styles from './orderBundle.module.scss'

interface OrderBunldeProps {
  children: JSX.Element[]
}

const OrderBundle = ({ children }: OrderBunldeProps) => {
  const shippingComponent = children.filter((item) => item.props.shippingData)
  const orderProductsComponent = children.filter((item) => item.props.orderProductDatas)

  return (
    <li className={styles.orderBundleBox}>
      {shippingComponent}
      {orderProductsComponent}
    </li>
  )
}

export default OrderBundle
