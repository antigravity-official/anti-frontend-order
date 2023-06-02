import Product from 'components/Product';
import { OrderProduct, Shipping } from 'types';
import * as $ from './ShippingItem.styles';

const ShippingItem = ({
  id,
  trackingNumber,
  shippingFee,
  post,
  message,
  address,
  products,
}: Shipping) => {
  return (
    <$.ShippingItemSection key={id}>
      <$.ShippingItemWrapper>
        <h2>배송 정보</h2>
        <p>
          송장번호: <span>{trackingNumber}</span>
        </p>
        <p>
          주소:
          <span>
            [{post}] {address}
          </span>
        </p>
        <p>배송료: {shippingFee} 원</p>

        <p>배송메세지: {message}</p>
      </$.ShippingItemWrapper>
      <div>
        {products?.map((product: OrderProduct) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </$.ShippingItemSection>
  );
};

export default ShippingItem;
