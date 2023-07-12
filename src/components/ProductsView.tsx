import { useOrder } from '../context/OrderProvider';
import { OrderProduct, Stock } from '../model/Models';

export const ProductsView = () => {
  const { order } = useOrder();

  return (
    <>
      {order.products.map(({ id, name, price, stock }: OrderProduct) => {
        const { color, band, cup, quantity }: Stock = stock;

        return (
          <div key={id}>
            상품명: {name}
            <br />
            가격: {price}원
            <br />
            주문정보: {color}/{band}/{cup} {quantity}개
          </div>
        );
      })}
    </>
  );
};
