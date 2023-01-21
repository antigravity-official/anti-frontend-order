import Product from '@/types/Product';
import React from 'react';

export type SingleProductProps = Pick<Product, keyof Product>;

export default function SingleProduct(
  props: React.PropsWithChildren<SingleProductProps>,
) {
  return <></>;
}
