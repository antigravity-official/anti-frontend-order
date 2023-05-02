import React, { useEffect, useState } from "react";
import "./App.css";
import { IOrder } from "./Models";
import assetOrder from "./assets/order.json";
import Order from "./components/Order";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState<IOrder>();

  useEffect(() => {
    showProgress();
    fetchMyOrder((json) => {
      parseOrder(json, (order) => {
        setOrder(order);
        hideProgress();
      });
    });
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  const fetchMyOrder = (onCompleted: (json: object) => void) => {
    setTimeout(() => {
      onCompleted(assetOrder);
    }, 1000);
  };

  const parseOrder = (json: any, onCompleted: (order: IOrder) => void) => {
    setTimeout(() => {
      const order: IOrder = {
        id: json.id,
        orderAt: new Date(json.orderAt),
        amount: json.amount,
        shipping: json.shipping,
      };
      onCompleted(order);
    }, 500);
  };

  return (
    <div>
      {isLoading || !order ? <div>Loading...</div> : <Order {...order} />}
    </div>
  );
}

export default App;
