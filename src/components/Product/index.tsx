import { OrderProduct } from 'types';
import ProductImage from 'components/UI/ProductImage';
import * as $ from './Product.styles';

const Product = ({ id, name, price, imageUrls, stock }: OrderProduct) => {
  const getPriceCurrency = () => {
    return price.toLocaleString('ko-KR');
  };
  return (
    <$.ProductSection>
      <h2>상품 정보</h2>
      <$.ProductWrapper>
        <$.ProductImageSection key={id}>
          {imageUrls?.map((imageUrl, index) => {
            return <ProductImage key={index} imageUrls={imageUrl} />;
          })}
        </$.ProductImageSection>
        <$.ProductInformation>
          <p>
            {name} | {stock.band} | {stock.cup}
          </p>
          <p>
            {stock.color} {stock.quantity}개
          </p>
          <p>
            가격: <span>{getPriceCurrency()}원</span>
          </p>
        </$.ProductInformation>
      </$.ProductWrapper>
    </$.ProductSection>
  );
};
export default Product;
