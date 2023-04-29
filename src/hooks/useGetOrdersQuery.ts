import { useQuery } from '@tanstack/react-query'

import { Order } from '../types/Models'
import assetOrder from '../assets/order.json'

const useGetOrdersQuery = () => {
  const query = useQuery(['ordersJson'], () => assetOrder)

  return query
}

export default useGetOrdersQuery

// res: Order
