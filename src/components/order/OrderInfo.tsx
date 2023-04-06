import { OrderInfo } from "../../Models";

type OrderInfoProps = OrderInfo & {};
const OrderInfomation = ({ id, orderAt, amount }: OrderInfoProps) => {
  return (
    <div>
      주문번호: {id}
      <br />
      주문일: {orderAt.toString()}
      <br />총 결제금액: {amount}원 <br />
      ----------------------------
    </div>
  );
};

export default OrderInfomation;
