import SingleOrder from '@/features/order/SingleOrder';
import useOrderList from '@/features/order/useOrderList';
import { CircularProgress, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function OrderList() {
  const [{ isLoading, orders, error }] = useOrderList();

  if (isLoading) {
    <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  return (
    <Stack>
      {orders.map((order) => (
        <SingleOrder key={order.id} {...order} />
      ))}
    </Stack>
  );
}
