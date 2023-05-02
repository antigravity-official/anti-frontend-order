import React, { useEffect, useState } from "react";
import "./App.css";
import { IOrder } from "./Models";
import Order from "./components/Order/Order";
import { fetchMyOrder } from "./api/orderApi";

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
      {isLoading || !order ? <div>Loading...</div> : <Order {...order} />}
    </div>
  );
}

export default App;
