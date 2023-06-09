import React from "react";

import "./Shipping.css";

interface ShippingProps {
  label: string;
  value: string | number;
}

const Shipping = ({ label, value }: ShippingProps) => {
  return <p>{`${label}: ${value}`}</p>;
};

export default Shipping;
