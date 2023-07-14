import React, { useEffect, useState } from "react";
import { OrderData } from "../../types/order";
import Shipping from "./Shipping";
import Product from "./Product";

type propTypes = {
    props: OrderData;
};

function OrderContainer({ props }: propTypes) {
    return (
        <>
            <div className="order-container">
                {props?.products?.map((res: any) => {
                    return <Product props={res} key={res.id} />;
                })}
                <Shipping props={props.shipping} />
            </div>
        </>
    );
}

export default OrderContainer;
