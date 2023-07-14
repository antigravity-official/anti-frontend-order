import React, { useEffect, useState } from "react";
import { OrderData } from "../../types/order";

type propTypes = {
    props: OrderData;
};

function Summary({ props }: propTypes) {
    return (
        <div className="summary-box">
            <ul>
                <li>
                    <strong>주문번호 :</strong>
                    <span>{props.id}</span>
                </li>
                <li>
                    <strong>주문일 :</strong>
                    <span>{props.orderAt}</span>
                </li>
                <li>
                    <strong>총 결제금액 :</strong>
                    <span>{props.amount}원</span>
                </li>
            </ul>
        </div>
    );
}

export default Summary;
