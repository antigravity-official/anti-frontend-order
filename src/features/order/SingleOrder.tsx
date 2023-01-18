import Order from '@/types/Order';
import { Card, Typography } from '@mui/material';
import React from 'react';

export type SingleOrderProps = Pick<Order, keyof Order>;

export default function SingleOrder(
  props: React.PropsWithChildren<SingleOrderProps>,
) {
  return (
    <Card>
      <Typography variant="h6">주문번호: {props.id}</Typography>
      <Typography variant="body1">총 결제금액: {props.amount}</Typography>
    </Card>
  );
}
