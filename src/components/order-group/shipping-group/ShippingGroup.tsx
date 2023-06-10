import { ShippingModel } from "../../../Models";

import Shipping from "./shipping/Shipping";

import "./ShippingGroup.css";

interface ShippingGroupProps {
  shipping: ShippingModel;
}

const ShippingGroup = ({ shipping }: ShippingGroupProps) => {
  return (
    <div className="shippingGroup">
      <p>----------------------------</p>
      <h3>[배송정보]</h3>
      <Shipping shipping={shipping} />
    </div>
  );
};

export default ShippingGroup;
