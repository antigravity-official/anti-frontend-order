import React from 'react';
import { Order } from '../../models/Order';
import { COLON, KOR_WON, ORDER_DATE, ORDER_NUMBER, TOTAL_AMOUNT } from '../../assets/constants';

const OrderInfo: React.FC<{ order: Order }> = ({ order }) => (
  <div>
    <div>
      {ORDER_NUMBER}
      {COLON}
      {order.id}
    </div>
    <div>
      {ORDER_DATE}
      {COLON}
      {order.orderAt.toLocaleString()}
    </div>
    <div>
      {TOTAL_AMOUNT}
      {COLON}
      {order.amount}
      {KOR_WON}
    </div>
  </div>
);

export default OrderInfo;
