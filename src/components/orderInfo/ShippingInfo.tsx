import * as T from "../../type/Models";

interface ProductInfoProps {
  data: T.Shipping;
}

export default function ShippingInfo({ data }: ProductInfoProps) {
  let output: string[] = [];
  const println = (text: string) => output.push(text);

  println(`[배송정보]`);
  println(`송장번호: ${data.trackingNumber}`);
  println(`배송료: ${data.shippingFee}원`);
  println(`주소: [${data.post}] ${data.address}`);
  println(`메시지: ${data.message}`);

  return (
    <>
      {output.map((line) => (
        <div>{line}</div>
      ))}
    </>
  );
}
