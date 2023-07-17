import React from 'react';
import { Order } from '../../models/Order';

const OrderInfo: React.FC<{ order: Order }> = ({ order }) => (
  <div>
    <div>주문번호: {order.id}</div>
    <div>주문일: {order.orderAt.toLocaleString()}</div>
    <div>총 결제금액: {order.amount}원</div>
  </div>
);

export default OrderInfo;
