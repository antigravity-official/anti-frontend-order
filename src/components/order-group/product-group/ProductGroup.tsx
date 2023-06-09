import React from "react";
import { OrderProductModel } from "../../../Models";

import Product from "./product/Product";

import "./ProductGroup.css";

interface ProductGroupProps {
  products: OrderProductModel[];
}

const ProductGroup = ({ products }: ProductGroupProps) => {
  return (
    <div className="productGroup">
      <h3>상품정보</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup;
