import * as T from "../../type/Models";
import DivLines from "../../utils/DivLines";

interface ProductInfoProps {
  data: T.OrderProduct[];
}

export default function ProductInfo({ data }: ProductInfoProps) {
  let output: string[] = [];
  const println = (text: string) => output.push(text);

  println(`[상품목록]`);
  println(``);
  data.forEach((p: T.OrderProduct) => {
    println(`상품명: ${p.name}`);
    println(`가격: ${p.price}원`);
    println(
      `주문정보: ${p.stock.color}/${p.stock.band}/${p.stock.cup} ${p.stock.quantity}개`
    );
    println(``);
  });

  return <DivLines output={output} />;
}
