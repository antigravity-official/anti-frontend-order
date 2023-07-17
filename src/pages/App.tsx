import { useEffect } from 'react';
import OrderInfo from '../components/myOrder/OrderInfo';
import ShippingInfo from '../components/myOrder/ShippingInfo';
import { Loading } from '../components/common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrderStart, fetchMyOrderSuccess, fetchMyOrderFailure } from '../redux/slices/myOrderSlice';
import { fetchMyOrder } from '../redux/apis/Order';
import { RootState } from '../redux/store';
import { COLON, ERROR, NO_ORDER_INFO_MESSAGE } from '../assets/constants';

function App() {
  const dispatch = useDispatch();
  const { loading, error, orderInfo } = useSelector((state: RootState) => state.myOrder);

  useEffect(() => {
    dispatch(fetchMyOrderStart());

    fetchMyOrder()
      .then((orderInfo) => {
        dispatch(fetchMyOrderSuccess(orderInfo));
      })
      .catch((error) => {
        dispatch(fetchMyOrderFailure(error.message));
      });
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        {ERROR}
        {COLON} {error}
      </div>
    );
  }

  if (!orderInfo) {
    return <div>{NO_ORDER_INFO_MESSAGE}</div>;
  }

  return (
    <div>
      {orderInfo && <OrderInfo order={orderInfo} />}
      {orderInfo?.shippings?.map((shipping, index) => <ShippingInfo key={index} shipping={shipping} />)}
    </div>
  );
}

export default App;
