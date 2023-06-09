import React from "react";
import { OrderModel } from "../../Models";

import "./OrderGroup.css";

interface OrderGroupProps {
  orderInfo: OrderModel[] | undefined;
}

const OrderGroup = ({ orderInfo }: OrderGroupProps) => {
  return (
    <div className="orderGroup">
      {orderInfo?.map(({ id, amount, orderAt }) => (
        <div key={id}>
          <p>주문번호: {id}</p>
          <p>주문일: {orderAt.toString()}</p>
          <p>총 결제금액: {amount}원</p>
        </div>
      ))}
    </div>
  );
};

export default OrderGroup;
