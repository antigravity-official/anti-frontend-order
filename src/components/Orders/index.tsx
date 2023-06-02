import useFetchOrders from 'hooks/api/useFetchOrders';
import useOrderItem from 'hooks/useOrderItem';

import OrderItem from './OrderItem';

import * as $ from './Orders.styles';

const Orders = () => {
  useFetchOrders();
  const orders = useOrderItem();
  const isLoading = useFetchOrders();

  return (
    <$.OrdersSection>
      {isLoading ? (
        <$.Orders_loadingText>잠시만 기다려 주세요</$.Orders_loadingText>
      ) : (
        <div>
          {orders?.map(order => (
            <OrderItem key={order.id} {...order} />
          ))}
        </div>
      )}
    </$.OrdersSection>
  );
};

export default Orders;
