import React from "react";
import { OrderProduct } from "../../Models";

import Product from "./product/Product";

interface ProductGroupProps {
  products: OrderProduct[];
}

const ProductGroup = ({ products }: ProductGroupProps) => {
  return (
    <div>
      <p>----------------------------</p>
      <p>[상품목록]</p>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <p>----------------------------</p>
    </div>
  );
};

export default ProductGroup;
