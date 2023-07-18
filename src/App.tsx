import { useEffect, useState } from "react";
import "./App.css";
import { fetchMyOrder, parseOrder, presentOrder } from "./Orders";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState(Array.of(""));

  useEffect(() => {
    showProgress();
    fetchMyOrder((json) => {
      parseOrder(json, (order) => {
        hideProgress();
        const output = presentOrder(order);
        updateOrderInfo(output);
      });
    });
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);
  const updateOrderInfo = (info: string[]) => setOrderInfo(info);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {orderInfo.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
}

export default App;
