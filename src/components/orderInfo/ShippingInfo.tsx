import { Shipping } from "../../type/Models";

interface ProductInfoProps {
  data: Shipping;
}

export default function ShippingInfo({ data }: ProductInfoProps) {
  return <h1>배송정보</h1>;
}
