import { useQuery } from '@tanstack/react-query'

import assetOrder from '../assets/order.json'

const useGetOrdersQuery = () => {
  const query = useQuery(['ordersJson'], () => assetOrder)

  return query
}

export default useGetOrdersQuery
