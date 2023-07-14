import React, { useEffect, useState } from "react";
import { ShippingType } from "../../types/order";

type propTypes = {
    props: ShippingType;
};

function Shipping({ props }: propTypes) {
    const { id, trackingNumber, shippingFee, address, post, message } = props;
    return (
        <div className="shipping-box" data-id={id}>
            <ul>
                <li>
                    <strong>송장번호 :</strong>
                    <span>{trackingNumber}</span>
                </li>
                <li>
                    <strong>배송료 :</strong>
                    <span>{shippingFee}원</span>
                </li>
                <li>
                    <strong>주소 :</strong>
                    <span>
                        [{post}] {address}
                    </span>
                </li>
                <li>
                    <strong>메시지 :</strong>
                    <span>{message}</span>
                </li>
            </ul>
        </div>
    );
}

export default Shipping;
