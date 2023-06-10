import { OrderProductModel } from "../../../../Models";

import "./Product.css";

interface ProductProps {
  product: OrderProductModel;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="product">
      <p>상품명: {product.name}</p>
      <p>가격: {product.price.toLocaleString()}원</p>
      <p>
        주문정보: {product.stock.color}/{product.stock.band}/{product.stock.cup}{" "}
        {product.stock.quantity}개
      </p>
    </div>
  );
};

export default Product;
