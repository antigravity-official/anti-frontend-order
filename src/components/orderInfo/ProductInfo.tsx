import { OrderProduct } from "../../type/Models";

interface ProductInfoProps {
  data: OrderProduct[] | null;
}

export default function ProductInfo({ data }: ProductInfoProps) {
  return <h1>상품정보</h1>;
}
