import React, { useEffect, useState } from "react";
import "./App.css";
import { IOrder } from "./Models";
import Order from "./components/Order/Order";
import { fetchMyOrder } from "./api/orderApi";
import Wrapper from "./components/Common/Wrapper";
import Shipping from "./components/Order/Shipping";
import OrderProduct from "./components/Order/OrderProduct";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    showProgress();
    const getOrder = async () => {
      await fetchMyOrder((order) => setOrder(order));
      hideProgress();
    };
    getOrder();
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  return (
    <div>
      {isLoading || !order ? (
        <div>Loading...</div>
      ) : (
        <Wrapper>
          <Order order={order} />
          {order.shipping.map((v) => (
            <Shipping key={order.id + v.id} shipping={v}>
              {v.products &&
                v.products.map((p) => (
                  <OrderProduct key={order.id + v.id + p.id} product={p} />
                ))}
            </Shipping>
          ))}
        </Wrapper>
      )}
    </div>
  );
}

export default App;
