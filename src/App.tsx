import React, { useState } from 'react'
import useGetOrdersQuery from './hooks/useGetOrdersQuery'

import { Order, OrderProduct } from './types/Models'

const App = () => {
  const { isLoading, data: ordersData } = useGetOrdersQuery()
  const [orderInfo, setOrderInfo] = useState(Array.of(''))

  if (isLoading || !ordersData) {
    return <div>Loading...</div>
  }

  const presentOrder = (order: Order) => {
    const output: string[] = []
    const println = (text: string) => output.push(text)

    println(`주문번: ${order.id}`)
    println(`주문일: ${order.orderAt}`)
    println(`총 결제금액: ${order.amount}원`)
    println(``)
    println(`----------------------------`)
    println(`[상품목록]`)
    println(``)
    order.products.forEach((p: OrderProduct) => {
      println(`상품명: ${p.name}`)
      println(`가격: ${p.price}원`)
      println(`주문정보: ${p.stock.color}/${p.stock.band}/${p.stock.cup} ${p.stock.quantity}개`)
      println(``)
    })
    println(`----------------------------`)
    println(`[배송정보]`)
    println(`송장번호: ${order.shipping.trackingNumber}`)
    println(`배송료: ${order.shipping.shippingFee}원`)
    println(`주소: [${order.shipping.post}] ${order.shipping.address}`)
    println(`메시지: ${order.shipping.message}`)

    // updateOrderInfo(output)
  }

  return (
    <div>
      {orderInfo.map((line, infoIndex) => {
        const infoKey = `info-${infoIndex}`
        return <div key={infoKey}>{line}</div>
      })}
    </div>
  )
}

export default App
