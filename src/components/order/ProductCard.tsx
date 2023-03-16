import styled from 'styled-components';
import { ImageContainer } from 'components/common';

interface ProductCardProps {
  product: OrderProduct;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CardWrapper>
      <p>상품명: {product.name}</p>
      <p>
        주문정보: {product.stock.color}/{product.stock.band}/{product.stock.cup} {product.stock.quantity}개
      </p>
      <p>가격: {product.price}</p>
      <ProductImageList>
        {product.imageUrls.map((imageUrl,index) => {
          return <ImageContainer key={index} imageUrl={imageUrl} sizeProps={{ width: '100px', height: '100px' }} />;
        })}
      </ProductImageList>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
`;

const ProductImageList = styled.div` 
    display:flex;
`
export default ProductCard;
