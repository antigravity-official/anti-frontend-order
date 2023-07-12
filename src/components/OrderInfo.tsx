import { FC } from "react";
import { Order, OrderProduct } from "../Models";

interface Props {
  order: Order;
}

const OrderInfo: FC<Props> = ({ order }) => {
  return (
    <div>
      <p>주문번 : {order.id}</p>
      <p>주문일 : {order.orderAt.toString()}</p>
      <p>총 결제금액 : {order.amount}</p>
      <p>----------------------------</p>
      <p>[상품목록]</p>
      {order.products.map((product: OrderProduct) => (
        <div key={product.id}>
          <p>상품명 : {product.name}</p>
          <p>가격 : {product.price}</p>
          <p>
            주문 정보 : {product.stock.color}/{product.stock.band}/
            {product.stock.cup}/{product.stock.quantity}개
          </p>
        </div>
      ))}
      <p>----------------------------</p>
      <p>[배송정보]</p>
      <p>송장번호: {order.shipping.trackingNumber}</p>
      <p>배송료: {order.shipping.shippingFee}원</p>
      <p>
        주소: [{order.shipping.post}] {order.shipping.address}
      </p>
      <p>메시지: {order.shipping.message}</p>
    </div>
  );
};

export default OrderInfo;
