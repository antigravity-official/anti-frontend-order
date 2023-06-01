import { OrderProduct } from 'types';
import ProductImage from 'components/UI/ProductImage';

const Product = (props: OrderProduct) => {
  const { id, name, price, imageUrls, stock } = props;

  return (
    <div>
      <div key={id}>
        <p>{name}</p>
        <p>가격: {price}원</p>
        {imageUrls?.map((imageUrl, index) => {
          return <ProductImage key={index} imageUrls={imageUrl} />;
        })}
      </div>
      <div>
        <p>색상: {stock.color}</p>
        <p>
          {stock.band}, {stock.cup}
        </p>
        <p>주문 수량: {stock.quantity}</p>
      </div>
    </div>
  );
};
export default Product;
