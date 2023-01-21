import OrderProductList from '@/features/order/order-product/OrderProductList';
import Shipping from '@/types/Shipping';
import { CardContent, CardHeader, Typography } from '@mui/material';

export type SingleOrderShippingProps = Pick<Shipping, keyof Shipping>;

export default function SingleOrderShipping(
  props: React.PropsWithChildren<SingleOrderShippingProps>,
) {
  return (
    <>
      <CardHeader
        title={`배송번호 ${props.id}`}
        subheader={`송장번호 ${props.trackingNumber}`}
      />
      <CardContent>
        <Typography variant="body1">{`배송주소: ${props.address} (${props.post})`}</Typography>
        <Typography variant="body1">배송료: {props.shippingFee}</Typography>
        <Typography variant="body1">메시지: {props.message}</Typography>
      </CardContent>
      <OrderProductList products={props.products} />
    </>
  );
}
