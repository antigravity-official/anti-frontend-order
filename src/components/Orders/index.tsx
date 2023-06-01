import useFetchOrders from 'hooks/api/useFetchOrders';
import * as $ from './Orders.styles';

const Orders = () => {
  useFetchOrders();
  const isLoading = useFetchOrders();

  return (
    <$.OrdersSection>
      {isLoading ? (
        <$.Orders_loadingText>잠시만 기다려 주세요</$.Orders_loadingText>
      ) : (
        <div></div>
      )}
    </$.OrdersSection>
  );
};

export default Orders;
