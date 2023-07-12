import { useOrder } from '../context/OrderProvider';

export const OrderView = () => {
  const { order } = useOrder();

  const { id, orderAt, amount } = order;

  return (
    <div>
      주문번호: {id}
      <br />
      주문일: {orderAt.toString()}
      <br />총 결제금액: {amount}원<br />
    </div>
  );
};
