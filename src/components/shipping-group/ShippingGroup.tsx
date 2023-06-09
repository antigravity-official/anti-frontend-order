import React from "react";
import { ShippingModel } from "../../Models";

import Shipping from "./shipping/Shipping";

import "./ShippingGroup.css";

interface ShippingGroupProps {
  shipping: ShippingModel;
}

const ShippingGroup = ({ shipping }: ShippingGroupProps) => {
  return (
    <div>
      <p>----------------------------</p>
      <p>[배송정보]</p>
      <Shipping
        key="trackingNumber"
        label="송장번호"
        value={shipping.trackingNumber}
      />
      <Shipping
        key="shippingFee"
        label="배송료"
        value={shipping.shippingFee + "원"}
      />
      <Shipping
        key="address"
        label="주소"
        value={`[${shipping.post}] ${shipping.address}`}
      />
      <Shipping key="message" label="메시지" value={shipping.message} />
    </div>
  );
};

export default ShippingGroup;
