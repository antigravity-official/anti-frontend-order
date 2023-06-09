import React from "react";
import { ShippingModel } from "../../../../Models";

import "./Shipping.css";

interface ShippingProps {
  shipping: ShippingModel;
}

const Shipping = ({ shipping }: ShippingProps) => {
  return (
    <div className="shipping">
      <p>----------------------------</p>
      <p>송장번호: {shipping.trackingNumber}</p>
      <p>배송료: {shipping.shippingFee + "원"}</p>
      <p>주소: {`[${shipping.post}] ${shipping.address}`}</p>
      <p>메세지: {shipping.message}</p>
    </div>
  );
};

export default Shipping;
