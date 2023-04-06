import { Shipping } from "../../Models";
type ShippingInfoProps = Shipping & {};
const ShippingInfo = ({
  trackingNumber,
  shippingFee,
  post,
  address,
  message,
}: ShippingInfoProps) => {
  return (
    <>
      ----------------------------
      <br />
      [배송정보] <br />
      송장번호: {trackingNumber}
      <br />
      배송료: {shippingFee}원<br />
      주소: [{post}] {address}
      <br />
      메시지: {message}
      <br />
    </>
  );
};

export default ShippingInfo;
