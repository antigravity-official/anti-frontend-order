import ShippingItem from 'components/ShippingItem';
import { Order, Shipping } from 'types';

import * as $ from './OrderItem.styles';

const OrderItem = ({ id, orderAt, amount, shippings, products }: Order) => {
  const getDateString = () => {
    return new Date(orderAt).toISOString().replace('T', ' ').slice(0, -5);
  };
  const getAmountCurrency = () => {
    return amount.toLocaleString('ko-KR');
  };
  return (
    <$.OrdersSection key={id}>
      <h1>주문 내역</h1>
      <$.OrdersWrap>
        <$.OrdersInformation>
          <h2>주문 정보</h2>
          <p>주문번호: {id}</p>
          <p>주문일자: {getDateString()}</p>
          <p>
            총 결제 금액: <span>KRW {getAmountCurrency()}원</span>
          </p>
        </$.OrdersInformation>
        <$.Orders_shippingsInformation>
          {shippings &&
            shippings.map((shipping: Shipping) => (
              <ShippingItem
                key={shipping.id}
                {...{ ...shipping, ...products }}
              />
            ))}
        </$.Orders_shippingsInformation>
      </$.OrdersWrap>
    </$.OrdersSection>
  );
};

export default OrderItem;
