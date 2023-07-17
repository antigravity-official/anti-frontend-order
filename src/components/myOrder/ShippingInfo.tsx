import React from 'react';
import { Shipping } from '../../models/Shipping';
import ProductInfo from './ProductInfo';
import { OrderProduct } from '../../models/Product';

const ShippingInfo: React.FC<{ shipping: Shipping }> = ({ shipping }) => (
  <div>
    <h2>배송 정보</h2>
    <div>송장번호: {shipping.trackingNumber}</div>
    <div>배송료: {shipping.shippingFee}원</div>
    <div>
      주소: [{shipping.post}] {shipping.address}
    </div>
    <div>메시지: {shipping.message}</div>
    {shipping.products.map((product: OrderProduct, index: number) => (
      <ProductInfo key={index} product={product} />
    ))}
  </div>
);

export default ShippingInfo;
