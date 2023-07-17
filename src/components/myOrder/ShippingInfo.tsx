import React from 'react';
import { Shipping } from '../../redux/types/myOrder/Shipping';
import ProductInfo from './ProductInfo';
import { OrderProduct } from '../../redux/types/myOrder/Product';
import {
  COLON,
  KOR_WON,
  SHIPPING_ADDRESS,
  SHIPPING_FEE,
  SHIPPING_MESSAGE,
  TRACKING_NUMBER,
} from '../../assets/constants';
import { addCommas } from '../common/AddCommas';

const ShippingInfo: React.FC<{ shipping: Shipping }> = ({ shipping }) => (
  <div className="flex space-x-8 items-center leading-8 ">
    <div>
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
    </div>
    <div>
      <div>
        {SHIPPING_ADDRESS}
        {COLON}[{shipping.post}] {shipping.address}
      </div>
      <div>
        {SHIPPING_MESSAGE}
        {COLON}
        {shipping.message}
      </div>
    </div>
  </div>
);

const ShippingInfoWrapper: React.FC<{ shippings: Shipping[] }> = ({ shippings }) => (
  <>
    {shippings.map((shipping: Shipping, index: number) => (
      <div key={index} className="grid grid-cols-2 grid-flow-row py-[20px]">
        <ShippingInfo shipping={shipping} />
        <div>
          {shipping.products.map((product: OrderProduct, index: number) => (
            <ProductInfo key={index} product={product} />
          ))}
        </div>
      </div>
    ))}
  </>
);

export default ShippingInfoWrapper;
