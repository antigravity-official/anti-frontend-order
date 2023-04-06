import { useCallback } from "react";
import { Order, OrderProduct } from "./Models";
import "./App.css";
import { delay } from "./utils";
import { fetchMyOrder } from "./api/v1/order";
import useFetchApi from "./hooks/useFetchApi";

/**
 * 1. api fetcher 분리
 *  - fetchMyOrder callback > callback (callback hell 가능성 있는 구간에 대하여) Promise 로 처리 하기
 *  - useFetchApi custom hook 생성
 *
 * 2. parse 함수
 * 3. component 분리
 *
 */

const parseOrder = async (json: Record<string, any>): Promise<Order> => {
  // parse order
  // response data 를 parse 합니다
  //
  await delay(500);
  const order: Order = {
    id: json.id,
    orderAt: new Date(json.orderAt),
    amount: json.amount,
    products: json.products,
    shipping: json.shipping,
  };
  return order;
};

const fetchFn = async () => {
  const json = await fetchMyOrder();
  const order = await parseOrder(json);
  return order;
};

function App() {
  const { isLoading, data, refetch } = useFetchApi({
    initailData: {
      id: -1,
      orderAt: new Date(),
      amount: 0,
      products: [],
      shipping: {
        id: -1,
        trackingNumber: "-1",
        shippingFee: 0,
        address: "",
        post: "",
        message: "",
      },
    },
    fetchFn: fetchFn,
  });

  const presentOrder = useCallback((order: Order) => {
    let output: string[] = [];
    const println = (text: string) => output.push(text);
    //
    println(`주문번: ${order.id}`);
    println(`주문일: ${order.orderAt}`);
    println(`총 결제금액: ${order.amount}원`);
    println(``);
    println(`----------------------------`);
    println(`[상품목록]`);
    println(``);
    order.products.forEach((p: OrderProduct) => {
      println(`상품명: ${p.name}`);
      println(`가격: ${p.price}원`);
      println(
        `주문정보: ${p.stock.color}/${p.stock.band}/${p.stock.cup} ${p.stock.quantity}개`
      );
      println(``);
    });
    println(`----------------------------`);
    println(`[배송정보]`);
    println(`송장번호: ${order.shipping.trackingNumber}`);
    println(`배송료: ${order.shipping.shippingFee}원`);
    println(`주소: [${order.shipping.post}] ${order.shipping.address}`);
    println(`메시지: ${order.shipping.message}`);
    return output;
  }, []);
  return (
    <div>
      <button type="button" onClick={refetch}>
        refetch
      </button>
      {isLoading && <div>Loading...</div>}
      {presentOrder(data).map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  );
}

export default App;
