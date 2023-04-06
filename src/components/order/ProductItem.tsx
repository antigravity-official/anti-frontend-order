import { OrderProduct } from "../../Models";

type ProductItemProps = OrderProduct & {};
const ProductItem = ({ name, price, stock }: ProductItemProps) => {
  return (
    <>
      상품명: {name} <br />
      가격: {price}원 <br />
      주문정보: {stock.color}/{stock.band}/{stock.cup}/{stock.quantity}개
    </>
  );
};

export default ProductItem;
