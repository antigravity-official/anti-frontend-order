import React from "react";
import { OrderModel } from "../../Models";

import ShippingGroup from "./shipping-group/ShippingGroup";
import ProductGroup from "./product-group/ProductGroup";

import "./OrderGroup.css";

interface OrderGroupProps {
  ordersInfo: OrderModel[];
}

const OrderGroup = ({ ordersInfo }: OrderGroupProps) => {
  if (!Array.isArray(ordersInfo) || ordersInfo.length === 0) {
    return (
      <div className="orderGroup">
        <h3>주문정보가 없습니다.</h3>
      </div>
    );
  }

  return (
    <div className="orderGroup">
      {ordersInfo?.map(({ id, amount, orderAt, shippingList }) => (
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
