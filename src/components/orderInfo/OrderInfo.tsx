import * as T from "../../type/Models";
import DivLines from "../../utils/DivLines";
import Divider from "./Divider";
import ProductInfo from "./ProductInfo";
import ShippingInfo from "./ShippingInfo";

interface OrderInfoProps {
  data: T.Order | null;
}

export default function OrderInfo({ data }: OrderInfoProps) {
  if (!data) return null;

  let output: string[] = [];
  const println = (text: string) => output.push(text);

  println(`주문번호: ${data?.id}`);
  println(`주문일: ${data?.orderAt}`);
  println(`총 결제금액: ${data?.amount}원`);

  return (
    <div>
      <DivLines output={output} />
      <Divider />
      <ProductInfo data={data.products} />
      <Divider />
      <ShippingInfo data={data.shipping} />
    </div>
  );
}
