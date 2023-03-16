import { useEffect, useState } from 'react';
import { orderData } from 'data/json';

function App() {
  const [isLoading, setLoading] = useState(false); /* 로딩중 유무 관리 */
  const [orderInfo, setOrderInfo] = useState(Array.of('')); /* 주문 정보 state */
  useEffect(() => {
    // showProgress();
    // fetchMyOrder((json) => {
    //   parseOrder(json, (order) => {
    //     hideProgress();
    //     presentOrder(order);
    //   });
    // });
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);
  const updateOrderInfo = (info: string[]) => setOrderInfo(info);

  /* JSON으로 부터 주문 정보를 불러옴 */
  const fetchMyOrder = (onCompleted: (json: object) => void) => {
    /* promise를 반환하지 않고 callback 방식으로 비동기 처리 */
    setTimeout(() => {
      onCompleted(orderData);
    }, 1000); /* 1초 지연 */
  };
  /* 불러온 주문 정보를 Order타입의 order객체로 반환함 */
  const parseOrder = (json: any, onCompleted: (order: Order) => void) => {
    setTimeout(() => {
      const order: Order = {
        id: json.id,
        orderAt: new Date(json.orderAt) /* Date 형식으로 변환 */,
        amount: json.amount,
        // products: json.products,
        shippingList: json.shippingList,
      };
      onCompleted(order);
    }, 500); /* 0.5초 지연 */
  };

  const presentOrder = (order: Order) => {
    // let output: string[] = [];
    // const println = (text: string) => output.push(text);

    // println(`주문번: ${order.id}`);
    // println(`주문일: ${order.orderAt}`);
    // println(`총 결제금액: ${order.amount}원`);
    // println(``);
    // println(`----------------------------`);
    // order.orderProductList.map((orderProduct: OrderProductsPerShipping) => {
    //   println(`[배송정보]`);
    //   println(`송장번호: ${orderProduct.shipping.trackingNumber}`);
    //   println(`배송료: ${orderProduct.shipping.shippingFee}원`);
    //   println(`주소: [${orderProduct.shipping.post}] ${orderProduct.shipping.address}`);
    //   println(`메시지: ${orderProduct.shipping.message}`);
    //   println(``);
    //   println(`----------------------------`);
    //   println(`[상품목록]`);
    //   orderProduct.products.forEach((p: OrderProduct) => {
    //     println(``);
    //     println(`상품명: ${p.name}`);
    //     println(`가격: ${p.price}원`);
    //     println(`주문정보: ${p.stock.color}/${p.stock.band}/${p.stock.cup} ${p.stock.quantity}개`);
    //   });
    // });

    // updateOrderInfo(output);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {orderInfo.map((line) => (
        <div>{line}</div>
      ))}
    </div>
  );
}

export default App;
