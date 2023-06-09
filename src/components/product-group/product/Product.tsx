import React from "react";

import { OrderProduct } from "../../../Models";

interface ProductProps {
  product: OrderProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <p>{`상품명: ${product.name}`}</p>
      <p>{`가격: ${product.price}원`}</p>
      <p>
        {`주문정보: ${product.stock.color}/${product.stock.band}/${product.stock.cup} ${product.stock.quantity}개`}
      </p>
    </div>
  );
};

export default Product;
