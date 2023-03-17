import styled from 'styled-components';
import * as CommonStyle from 'styles/Common.style';
import { ShippingCard } from 'components/order';

interface OrderPageProps {
  order: Order;
}
const OrderPageComponent = ({ order }: OrderPageProps) => {
  return (
    <Wrapper>
      <CommonStyle.PageTitle>주문 내역</CommonStyle.PageTitle>
      <OrderInfo>
        <CommonStyle.SubTitle>주문 정보</CommonStyle.SubTitle>
        <p>주문 번호 : {order.id}</p>
        <p>주문 날짜 : {order.orderAt.toISOString().substring(0, 19).replace('T', ' ')}</p>
        <p>
          총 결제 금액 : <strong>{order.amount}</strong>원
        </p>
      </OrderInfo>
      <ShippingList>
        {order.shippingList.map((shipping) => {
          return <ShippingCard key={shipping.id} shipping={shipping} />;
        })}
      </ShippingList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 40px;
`;

const OrderInfo = styled.div`
  padding-top: 40px;
  background-color: #fff;
`;
const ShippingList = styled.div``;

export default OrderPageComponent;
