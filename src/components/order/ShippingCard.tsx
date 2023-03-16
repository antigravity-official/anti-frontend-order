import styled from 'styled-components';
import { ProductItem } from 'components/order';
import * as CommonStyle from 'styles/Common.style';

interface ShippingCardProps {
  shipping: Shipping;
}
const ShippingCard = ({ shipping }: ShippingCardProps) => {
  return (
    <CardWrapper>
      <CommonStyle.SubTitle>배송 정보</CommonStyle.SubTitle>
      <ShippingInfo>
        <p>송장 번호 : {shipping.trackingNumber}</p>
        <p>배송료 : {shipping.shippingFee}원</p>
        <p>
          주소지 : [{shipping.post}] {shipping.address}
        </p>
        <p>메세지 : {shipping.message}</p>
      </ShippingInfo>
      <ProductsContainer>
        <CommonStyle.SubTitle>상품 정보</CommonStyle.SubTitle>
        {shipping?.productList?.map((product: OrderProduct) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ProductsContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin-top: 40px;
  strong {
    font-weight: 900;
  }
  p {
    margin-bottom: 8px;
  }
`;

const ShippingInfo = styled.div`
  background-color: #fff;
`;

const ProductsContainer = styled.ul`
  margin-top: 40px;
`;
export default ShippingCard;
