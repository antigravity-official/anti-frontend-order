import React from "react";
import { OrderProductModel } from "../../Models";

import Product from "./product/Product";

interface ProductGroupProps {
  products: OrderProductModel[];
}

const ProductGroup = ({ products }: ProductGroupProps) => {
  return (
    <div>
      <p>----------------------------</p>
      <p>[상품목록]</p>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup;
