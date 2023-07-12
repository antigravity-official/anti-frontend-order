import type { FC } from "react";
import { OrderProduct } from "../Models";

interface Props {
  productLists: OrderProduct[];
}

const OrderProductLists: FC<Props> = ({ productLists }) => {
  return (
    <div>
      <p>[상품목록]</p>
      {productLists.map((product: OrderProduct) => (
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

export default OrderProductLists;
