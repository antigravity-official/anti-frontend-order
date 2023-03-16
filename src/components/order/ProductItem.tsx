import styled from 'styled-components';
import { ImageContainer } from 'components/common';

interface ProductItemProps {
  product: OrderProduct;
}
const ProductItem = ({ product }: ProductItemProps) => {
  /* 상품 상세 이미지는 슬라이드로 구현이 가능 할 것 같습니다. */
  return (
    <CardWrapper>
      <ProductImageList>
        {product.imageUrls.map((imageUrl, index) => {
          return <ImageContainer key={index} imageUrl={imageUrl} sizeProps={{ width: '100px', height: '100px' }} />;
        })}
      </ProductImageList>
      <ProductInfo>
        <p>상품명: {product.name}</p>
        <p>
          주문정보: {product.stock.color}/{product.stock.band}/{product.stock.cup} {product.stock.quantity}개
        </p>
        <p>
          가격: <strong>{product.price}원</strong>
        </p>
      </ProductInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: start;
  }
  strong {
    font-weight: 900;
  }
  p {
    margin-bottom: 8px;
  }
`;
const ProductImageList = styled.div`
  display: flex;
`;

const ProductInfo = styled.div`
  margin-left: 32px;
  @media (max-width: 550px) {
    margin-left:0;
    margin-top: 32px;
  }
`;
export default ProductItem;
