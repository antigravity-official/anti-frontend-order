import React, { useEffect, useState } from 'react';
import { Order } from '../models/Order';
import { fetchMyOrder, parseOrder } from '../apis/Order';
import OrderInfo from '../components/myOrder/OrderInfo';
import ShippingInfo from '../components/myOrder/ShippingInfo';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState<Order | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchMyOrder()
      .then((json) => {
        const myOrder = parseOrder(json);
        setOrderInfo(myOrder);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error of fetting MyOrder: ', error);
        setLoading(false);
      });
  }, []);
  console.log(orderInfo);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {orderInfo && <OrderInfo order={orderInfo} />}
          {orderInfo?.shippings?.map((shipping, index) => <ShippingInfo key={index} shipping={shipping} />)}
        </>
      )}
    </div>
  );
}

export default App;
