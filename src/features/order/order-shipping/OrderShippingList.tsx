import SingleOrderShipping, {
  SingleOrderShippingProps,
} from '@/features/order/order-shipping/SingleOrderShipping';
import { Typography } from '@mui/material';

export type OrderShippingListProps = {
  orderShippings: SingleOrderShippingProps[];
};

export default function OrderShippingList(
  props: React.PropsWithChildren<OrderShippingListProps>,
) {
  if (
    typeof props.orderShippings === 'undefined' ||
    props.orderShippings.length === 0
  ) {
    return <Typography>배송정보 없음</Typography>;
  }

  return (
    <>
      {props.orderShippings.map((orderShipping) => (
        <SingleOrderShipping key={orderShipping.id} {...orderShipping} />
      ))}
    </>
  );
}
