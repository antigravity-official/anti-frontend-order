import React from 'react';
import { OrderProduct } from '../../models/Product';

const ProductInfo: React.FC<{ product: OrderProduct }> = ({ product }) => (
  <div>
    <h2>상품 목록</h2>
    <div>상품명: {product.name}</div>
    <div>가격: {product.price}원</div>
    <div>
      주문정보: {product.stock.color}/{product.stock.band}/{product.stock.cup} {product.stock.quantity}개
    </div>
  </div>
);

export default ProductInfo;
