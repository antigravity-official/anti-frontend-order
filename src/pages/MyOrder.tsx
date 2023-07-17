import { useEffect } from 'react';
import OrderInfo from '../components/myOrder/OrderInfo';
import { Loading } from '../components/common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrderStart, fetchMyOrderSuccess, fetchMyOrderFailure } from '../redux/slices/myOrderSlice';
import { fetchMyOrder } from '../redux/apis/Order';
import { RootState } from '../redux/store';
import { COLON, ERROR, NO_ORDER_INFO_MESSAGE, ORDER_INQUIRY, ORDER_PRODUCT_INFO } from '../assets/constants';
import { Shipping } from '../redux/types/myOrder/Shipping';
import Header from '../components/common/Header';
import ShippingInfoWrapper from '../components/myOrder/ShippingInfo';

function MyOrder() {
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
    <div className="mt-[140px]">
      <Header />
      <div className="flex w-[1280px] m-auto pt-[30px]">
        <div className="flex flex-col justify-center">
          <h2 className="text-[1.7rem] font-bold text-center mt-[50px] mb-[20px]">{ORDER_INQUIRY}</h2>
          <h4 className="text-[15px] font-semibold mb-[10px] text-left">{ORDER_PRODUCT_INFO}</h4>
          <div className="grid grid-cols-1 border rounded-lg px-16 py-12">
            <div className="border-b pb-6">{orderInfo && <OrderInfo order={orderInfo} />}</div>
            <div className="grid grid-cols-1 m-auto mt-6">
              {orderInfo?.shippings?.map((shipping: Shipping, index: number) => (
                <div key={index} className="border rounded-lg p-10 mb-[20px]">
                  <ShippingInfoWrapper shippings={[shipping]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
