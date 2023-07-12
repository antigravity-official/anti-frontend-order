import { FC } from "react";
import { PaymentInfo } from "../Models";

interface Props {
  paymentInfo: PaymentInfo;
}

const OrderPaymentInfo: FC<Props> = ({ paymentInfo }) => {
  return (
    <div>
      <p>주문번 : {paymentInfo.id}</p>
      <p>주문일 : {paymentInfo.orderAt.toString()}</p>
      <p>총 결제금액 : {paymentInfo.amount}</p>
    </div>
  );
};

export default OrderPaymentInfo;
