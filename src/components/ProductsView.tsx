import { useOrder } from '../context';

export const ProductsView = () => {
  const { order } = useOrder();

  return (
    <>
      {order.products.map(({ id, name, price, stock }) => {
        const { color, band, cup, quantity } = stock;

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
