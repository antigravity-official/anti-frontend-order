import React from 'react';
import { SingleProductProps } from '@/features/product/SingleProduct';

type ProductListProps = {
  products: SingleProductProps[];
};

export default function ProductList(
  props: React.PropsWithChildren<ProductListProps>,
) {
  return <></>;
}
