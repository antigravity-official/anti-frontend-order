import SingleOrderProduct, {
  SingleOrderProductProps,
} from '@/features/order/order-product/SingleOrderProduct';
import React from 'react';

type OrderProductListProps = {
  products: SingleOrderProductProps[];
};

export default function OrderProductList(
  props: React.PropsWithChildren<OrderProductListProps>,
) {
  return (
    <>
      {props.products.map((product) => (
        <SingleOrderProduct key={product.id} {...product} />
      ))}
    </>
  );
}
