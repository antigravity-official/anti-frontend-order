import SingleOrder from '@/features/order/SingleOrder';
import useOrderList from '@/features/order/useOrderList';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export default function OrderList() {
  const [{ isLoading, orders, error }] = useOrderList();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
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
