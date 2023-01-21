import { getOrders } from '@/api/order';
import Order from '@/types/Order';
import React from 'react';

export default function useOrderList() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [error, setError] = React.useState<Error | null>(null);

  // bind state with api
  const fetchOrders = React.useCallback(async () => {
    setIsLoading(true);

    try {
      const orders = await getOrders();
      setOrders(orders);
    } catch (error) {
      setError(error as Error);
    }

    setIsLoading(false);
  }, []);

  // use 'useEffect' only when having interaction with the outside world
  React.useEffect(() => {
    fetchOrders();
    // deps is empty because the `fetchOrders` is not changing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    {
      isLoading,
      orders,
      error,
    },
    {
      fetchOrders,
    },
  ] as const;
}
