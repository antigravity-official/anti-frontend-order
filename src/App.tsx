import React from "react";
import "./App.css";
import OrderInfo from "./components/OrderInfo";
import useFetchData from "./hooks/useFetchData";

function App() {
  const { isLoading, order } = useFetchData();

  return (
    <div>
      {isLoading ? <div>Loading...</div> : order && <OrderInfo order={order} />}
    </div>
  );
}

export default App;
