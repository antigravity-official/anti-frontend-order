import type { SuccessResponse } from "../../api/CallApi";

interface ProductProps {
  product: SuccessResponse<"/ship/{shipId}", "get">["products"][number];
}
export const Product = (props: ProductProps) => {
  const { product } = props;
  return (
    <div>
      <div>----------------------------</div>
      <div>[상품정보]</div>
      <div>상품명: {product.name}</div>
      <div>가격: {product.price}원</div>
      <div>
        주문정보: {product.stock.color}/{product.stock.band}/{product.stock.cup}{" "}
        {product.stock.quantity}개
      </div>
      <div></div>
    </div>
  );
};
