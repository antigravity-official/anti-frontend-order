import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./styles/ui.scss";
import OrderBox from "./components/order/Index";
import { OrderData } from "./types/order";
import orderApi from "./apis";

function App() {
    const [isLoading, setLoading] = useState(false);
    const [orderInfo, setOrderInfo] = useState<OrderData[]>([]);

    const orderDataFetch = async () => {
        try {
            const orderList = await orderApi.getOrderList();
            setLoading(true);
            setOrderInfo([orderList.data]);
            setLoading(false);
        } catch {
            setLoading(true);
        }
    };

    useEffect(() => {
        orderDataFetch();
    }, []);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {orderInfo.map((order) => {
                return <OrderBox data={order} key={order.id} />;
            })}
        </div>
    );
}

export default App;
