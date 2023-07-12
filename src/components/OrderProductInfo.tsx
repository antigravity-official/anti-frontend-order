import type { FC } from "react";
import { Order, OrderProduct } from "../Models";

interface Props {
  order: Order;
}

const OrderProductInfo: FC<Props> = ({ order }) => {
  return (
    <div>
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
    </div>
  );
};

export default OrderProductInfo;
