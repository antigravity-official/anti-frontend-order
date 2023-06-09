import React from "react";
import { ShippingModel } from "../../Models";

import Product from "./product/Product";

import "./ProductGroup.css";

interface ProductGroupProps {
  shippingInfo: ShippingModel[];
}

const ProductGroup = ({ shippingInfo }: ProductGroupProps) => {
  console.log(shippingInfo);
  return (
    <div className="productGroup">
      <h3>상품정보</h3>
      {shippingInfo.map((shipping) => (
        <div key={shipping.id}>
          {shipping.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductGroup;
