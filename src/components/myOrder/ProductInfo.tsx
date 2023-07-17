import React from 'react';
import { OrderProduct } from '../../models/Product';
import { COLON, KOR_WON, ORDER_INFO, PRICE, PRODUCT_LIST, PRODUCT_NAME } from '../../assets/constants';

const ProductInfo: React.FC<{ product: OrderProduct }> = ({ product }) => (
  <div>
    <h2>{PRODUCT_LIST}</h2>
    <div>
      {PRODUCT_NAME}
      {COLON}
      {product.name}
    </div>
    <div>
      {PRICE}
      {COLON}
      {product.price}
      {KOR_WON}
    </div>
    <div>
      {ORDER_INFO}
      {COLON}
      {product.stock.color}/{product.stock.band}/{product.stock.cup} {product.stock.quantity}개
    </div>
  </div>
);

export default ProductInfo;
