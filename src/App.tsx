import { Order } from "./Models";
import { delay } from "./utils";
import "./App.css";
import { fetchMyOrder } from "./api/v1/order";
import useFetchApi from "./hooks/useFetchApi";
import OrderInfo from "./components/order/OrderInfo";
import ShippingInfo from "./components/order/ShippingInfo";
import ProductItem from "./components/order/ProductItem";

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
  // 향후 json 변경시, 이 부분에서 변경한다.
  await delay(500);
  const shippings = [json.shipping].map((ship) => {
    ship.products = json.products;
    return ship;
  });
  const order: Order = {
    id: json.id,
    orderAt: new Date(json.orderAt),
    amount: json.amount,
    shippings,
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
      shippings: [
        {
          id: -1,
          trackingNumber: "-1",
          shippingFee: 0,
          address: "",
          post: "",
          message: "",
          products: [],
        },
      ],
    },
    fetchFn: fetchFn,
  });
  return (
    <div>
      <button type="button" onClick={refetch}>
        refetch
      </button>
      {isLoading && <div>Loading...</div>}
      <OrderInfo id={data.id} amount={data.amount} orderAt={data.orderAt} />
      <ul>
        {data.shippings.map(({ products, ...shipping }, index) => {
          return (
            <li key={`Shipping__${shipping.id}__${index}`}>
              <ShippingInfo {...shipping} />
              <ul>
                {products.map((product, idx) => {
                  return (
                    <li key={`ProductItem__${product.id}__${idx}`}>
                      <ProductItem {...product} />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
