import { FC } from "react";
import { PaymentInfo } from "../Models";

interface Props {
  paymentInfo: PaymentInfo;
}

const OrderPaymentInfo: FC<Props> = ({ paymentInfo }) => {
  const newDate = new Date(paymentInfo.orderAt);

  return (
    <div>
      <p>주문번 : {paymentInfo.id}</p>
      <p>주문일 : {newDate.toString()}</p>
      <p>총 결제금액 : {paymentInfo.amount}원</p>
    </div>
  );
};

export default OrderPaymentInfo;
