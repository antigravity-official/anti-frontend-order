import type { SuccessResponse } from "../../api/CallApi";

interface OrderProps {
  order?: SuccessResponse<"/order/{orderId}", "get">;
}
export const Order = (props: OrderProps) => {
  const { order } = props;
  if (typeof order !== "undefined") {
    return (
      <div>
        <div>주문번:{order.id}</div>
        <div>주문일:{order.orderAt}</div>
        <div>총 결제금액{order.amount}</div>
      </div>
    );
  }
  return null;
};
