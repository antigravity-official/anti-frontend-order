import React from 'react';
import { OrderProduct } from '../../redux/types/myOrder/Product';
import { COLON, EA, KOR_WON, ORDER_INFO, PRICE, PRODUCT_LIST, PRODUCT_NAME } from '../../assets/constants';
import { addCommas } from '../common/AddCommas';

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
      {addCommas(product.price)}
      {KOR_WON}
    </div>
    <div>
      {ORDER_INFO}
      {COLON}
      {product.stock.color}/{product.stock.band}/{product.stock.cup}
      {product.stock.quantity}
      {EA}
    </div>
  </div>
);

export default ProductInfo;
