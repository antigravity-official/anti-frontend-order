import { OrderProductModel } from "../../../Models";

import Product from "./product/Product";

import "./ProductGroup.css";

interface ProductGroupProps {
  products: OrderProductModel[];
}

const ProductGroup = ({ products }: ProductGroupProps) => {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="productGroup">
        <h3>상품정보가 없습니다.</h3>
      </div>
    );
  }

  return (
    <div className="productGroup">
      <p>----------------------------</p>
      <h3>[상품목록]</h3>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductGroup;
