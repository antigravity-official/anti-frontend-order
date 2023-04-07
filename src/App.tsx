import { fetchMyOrder } from "./api/v1/order";
import useFetchApi from "./hooks/useFetchApi";
import OrderInfo from "./components/order/OrderInfo";
import ShippingInfo from "./components/order/ShippingInfo";
import ProductItem from "./components/order/ProductItem";
import "./App.css";

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
    fetchFn: fetchMyOrder,
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
