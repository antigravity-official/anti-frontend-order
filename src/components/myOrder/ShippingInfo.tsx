import React from 'react';
import { Shipping } from '../../models/Shipping';
import ProductInfo from './ProductInfo';
import { OrderProduct } from '../../models/Product';
import {
  COLON,
  KOR_WON,
  SHIPPING_ADDRESS,
  SHIPPING_FEE,
  SHIPPING_INFO,
  SHIPPING_MESSAGE,
  TRACKING_NUMBER,
} from '../../assets/constants';
import { addCommas } from '../common/AddCommas';

const ShippingInfo: React.FC<{ shipping: Shipping }> = ({ shipping }) => (
  <div>
    <h2>{SHIPPING_INFO}</h2>
    <div>
      {TRACKING_NUMBER}
      {COLON}
      {shipping.trackingNumber}
    </div>
    <div>
      {SHIPPING_FEE}
      {COLON}
      {addCommas(shipping.shippingFee)}
      {KOR_WON}
    </div>
    <div>
      {SHIPPING_ADDRESS}
      {COLON}[{shipping.post}] {shipping.address}
    </div>
    <div>
      {SHIPPING_MESSAGE}
      {COLON}
      {shipping.message}
    </div>
    {shipping.products.map((product: OrderProduct, index: number) => (
      <ProductInfo key={index} product={product} />
    ))}
  </div>
);

export default ShippingInfo;
