import { FC } from "react";
import { PaymentInfo } from "../Models";
import { orderDate } from "../utils/orderDate";

interface Props {
  paymentInfo: PaymentInfo;
}

const OrderPaymentInfo: FC<Props> = ({ paymentInfo }) => {
  const newDate = orderDate(paymentInfo.orderAt);

  return (
    <div>
      <p>주문번 : {paymentInfo.id}</p>
      <p>주문일 : {newDate}</p>
      <p>총 결제금액 : {paymentInfo.amount}원</p>
    </div>
  );
};

export default OrderPaymentInfo;
