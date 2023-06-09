import React from "react";
import { OrderModel } from "../../Models";

import ShippingGroup from "./shipping-group/ShippingGroup";
import ProductGroup from "./product-group/ProductGroup";

import "./OrderGroup.css";

interface OrderGroupProps {
  orderInfo: OrderModel[] | undefined;
}

const OrderGroup = ({ orderInfo }: OrderGroupProps) => {
  return (
    <div className="orderGroup">
      {orderInfo?.map(({ id, amount, orderAt, shippingList }) => (
        <div key={id}>
          <p>주문번호: {id}</p>
          <p>주문일: {orderAt.toString()}</p>
          <p>총 결제금액: {amount}원</p>
          {shippingList.map((shipping) => (
            <div key={shipping.id}>
              <ShippingGroup shipping={shipping} />
              <ProductGroup products={shipping.products} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderGroup;
