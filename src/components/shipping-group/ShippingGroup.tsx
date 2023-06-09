import React from "react";
import { ShippingModel } from "../../Models";

import Shipping from "./shipping/Shipping";

import "./ShippingGroup.css";

interface ShippingGroupProps {
  shippingInfo: ShippingModel[];
}

const ShippingGroup = ({ shippingInfo }: ShippingGroupProps) => {
  console.log("shippingInfo", shippingInfo);
  return (
    <div>
      <h3>배송정보</h3>
      {shippingInfo.map((shipping) => (
        <Shipping key={shipping.id} shipping={shipping} />
      ))}
    </div>
  );
};

export default ShippingGroup;
