import ShippingItem from 'components/Shippings/ShippingItem';
import { Order, Shipping } from 'types';

const OrderItem = (props: Order) => {
  const { id, orderAt, amount, shippings, products } = props;
  const getDateString = () => {
    return new Date(orderAt).toISOString().replace('T', ' ').slice(0, -5);
  };
  const getAmountCurrency = () => {
    return amount.toLocaleString('ko-KR');
  };
  return (
    <div key={id}>
      <h1>주문 내역</h1>
      <div>
        <div>
          <h2>주문 정보</h2>
          <p>주문번호: {id}</p>
          <p>주문일자: {getDateString()}</p>
          <p>
            총 결제 금액: <span>KRW {getAmountCurrency()}원</span>
          </p>
        </div>
        <div>
          {shippings &&
            shippings.map((shipping: Shipping) => (
              <ShippingItem
                key={shipping.id}
                {...{ ...shipping, ...products }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
