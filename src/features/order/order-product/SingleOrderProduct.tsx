import OrderProduct from '@/types/OrderProduct';
import React from 'react';

export type SingleOrderProductProps = Pick<OrderProduct, keyof OrderProduct>;

export default function SingleOrderProduct(
  props: React.PropsWithChildren<SingleOrderProductProps>,
) {
  <></>;
}
