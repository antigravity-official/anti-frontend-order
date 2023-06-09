import React from "react";

import "./OrderGroup.css";

interface OrderProps {
  orderInfo: string[];
  orderId: string;
}

const OrderGroup = ({ orderInfo, orderId }: OrderProps) => {
  return (
    <div className="orderGroup">
      {orderInfo.map((line, index) => (
        <div key={index === 0 ? orderId : index}>{line}</div>
      ))}
    </div>
  );
};

export default OrderGroup;
