import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import OrderContainer from "./OrderContainer";
import { OrderData } from "../../types/order";

type propTypes = {
    data: OrderData;
};

function OrderBox({ data }: propTypes) {
    return (
        <>
            <div className="order-box">
                <h1>주문서</h1>
                <Summary props={data} />
                <OrderContainer props={data} />
            </div>
        </>
    );
}

export default OrderBox;
