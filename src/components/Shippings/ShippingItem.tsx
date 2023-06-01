import { Shipping } from 'types';

const ShippingItem = (props: Shipping) => {
  const { id, trackingNumber, shippingFee, post, message, address } = props;
  console.log(props);
  return (
    <div key={id}>
      <div>
        <p>배송번호: {id}</p>
        <p>송장번호: {trackingNumber}</p>
        <p>배송료: {shippingFee} 원</p>
        <p>
          주소: [{post}] {address}
        </p>
        <p>배송메세지: {message}</p>
        <div>products</div>
      </div>
    </div>
  );
};

export default ShippingItem;
