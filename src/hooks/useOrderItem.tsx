import { useRecoilValue } from 'recoil';
import ordersState from 'atoms/ordersState';

const useOrderItem = () => {
  const orders = useRecoilValue(ordersState);

  return orders;
};

export default useOrderItem;
