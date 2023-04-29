import { Order } from 'types/ordersTypes'

const getOrderInfoData = (ordersData: Order) => {
  const orderInfoData = {
    id: ordersData.id,
    orderAt: new Date(ordersData.orderAt),
    amount: ordersData.amount,
  }

  return orderInfoData
}

export default getOrderInfoData
