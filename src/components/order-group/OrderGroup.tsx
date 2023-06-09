import React from "react";

import "./OrderGroup.css";

interface OrderGroupProps {
  orderInfo: JSX.Element[];
}

const OrderGroup = ({ orderInfo }: OrderGroupProps) => {
  return (
    <div className="orderGroup">
      {orderInfo.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default OrderGroup;
