import React, { useState } from 'react'
import useGetOrdersQuery from './hooks/useGetOrdersQuery'

import OrderInfo from './components/OrderInfo'

const App = () => {
  const { isLoading, data: ordersData } = useGetOrdersQuery()
  const [orderInfo, setOrderInfo] = useState(Array.of(''))

  if (isLoading || !ordersData) {
    return <div>Loading...</div>
  }

  const orderInfoData = {
    id: ordersData.id,
    orderAt: new Date(ordersData.orderAt),
    amount: ordersData.amount,
  }

  return (
    <div>
      <OrderInfo orderInfoData={orderInfoData} />
      {orderInfo.map((line, infoIndex) => {
        const infoKey = `info-${infoIndex}`
        return <div key={infoKey}>{line}</div>
      })}
    </div>
  )
}

export default App
