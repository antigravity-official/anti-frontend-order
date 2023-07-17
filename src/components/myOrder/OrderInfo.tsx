import React from 'react';
import { Order } from '../../redux/types/myOrder/Order';
import { COLON, KOR_WON, ORDER_DATE, ORDER_NUMBER, TOTAL_AMOUNT } from '../../assets/constants';
import { addCommas } from '../common/AddCommas';

const OrderInfo: React.FC<{ order: Order }> = ({ order }) => (
  <div className="flex justify-between">
    <div>
      {ORDER_DATE}
      {COLON}
      {order.orderAt.toLocaleString()}
    </div>
    <div>
      {ORDER_NUMBER}
      {COLON}
      {order.id}
    </div>
    <div>
      {TOTAL_AMOUNT}
      {COLON}
      {addCommas(order.amount)}
      {KOR_WON}
    </div>
  </div>
);

export default OrderInfo;
