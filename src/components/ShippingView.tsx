import { useOrder } from '../context';

export const ShippingView = () => {
  const { order } = useOrder();
  const { trackingNumber, shippingFee, post, address, message } =
    order.shipping;

  return (
    <div>
      송장번호: {trackingNumber}
      <br />
      배송료: {shippingFee}원
      <br />
      주소: [{post}] {address}
      <br />
      메시지: {message}
    </div>
  );
};
