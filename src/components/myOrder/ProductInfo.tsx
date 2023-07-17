import React from 'react';
import { OrderProduct } from '../../redux/types/myOrder/Product';
import { COLON, EA, KOR_WON, ORDER_INFO, PRICE, PRODUCT_LIST, PRODUCT_NAME } from '../../assets/constants';
import { addCommas } from '../common/AddCommas';

const ProductInfo: React.FC<{ product: OrderProduct }> = ({ product }) => (
  <div className="grid grid-flow-col text-right">
    <div className="ml-[80px] border rounded-2xl overflow-hidden w-[120px] mb-[15px]">
      <img src={product.imageUrls[0]} alt={product.name} />
    </div>
    <div className="leading-7">
      <div className="mb-[8px]">{PRODUCT_LIST}</div>
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
        <span className="pr-1.5">
          {product.stock.color}/{product.stock.band}/{product.stock.cup}
        </span>
        {product.stock.quantity}
        {EA}
      </div>
    </div>
  </div>
);

export default ProductInfo;
