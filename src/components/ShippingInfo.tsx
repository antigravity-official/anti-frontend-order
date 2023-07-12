import { FC } from "react";
import { Shipping } from "../Models";
import OrderProductLists from "./OrderProductLists";

interface Props {
  shippingInfo: Shipping;
}

const ShippingInfo: FC<Props> = ({ shippingInfo }) => {
  return (
    <div>
      <div>
        <p>[배송정보]</p>
        <p>송장번호: {shippingInfo.trackingNumber}</p>
        <p>배송료: {shippingInfo.shippingFee}원</p>
        <p>
          주소: [{shippingInfo.post}] {shippingInfo.address}
        </p>
        <p>메시지: {shippingInfo.message}</p>
      </div>
      <p>----------------------------</p>
      <OrderProductLists productLists={shippingInfo.products} />
    </div>
  );
};

export default ShippingInfo;
