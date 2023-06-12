import { useSelector, useDispatch } from 'react-redux'
import React, {
  useEffect, useState
} from 'react';
import logo from './logo.svg';
import './App.css';

import assetOrder from './assets/order.json';
import { Order } from './Models';
import {
  showProgress, hideProgress
} from './common/reducer/loadingSlice';
import { RootState } from './store';
import Progress from './common/progress/Progress';
import OrderInfo from './order/OrderInfo';
import {
  printOrder
} from './order/printer';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading)
  
  const [orderInfo, setOrderInfo] = useState<string[]>(Array.of(""));
  
  useEffect(() => {
    dispatch(showProgress());

    fetchMyOrder(json => {
      parseOrder(json, (order:Order) => {
        dispatch(hideProgress());
        presentOrder(order);
      });
    });
    
  }, []);
  
  const fetchMyOrder = (
    onCompleted: (json: any) => void
  ) => {
    setTimeout(() => {
      onCompleted(assetOrder);
    }, 1000);
  }
  
  const parseOrder = (
    json: any,
    onCompleted: (order: Order) => void
  ) => {

    setTimeout(() => {
      const order: Order = {
        id: json.id,
        orderAt: new Date(json.orderAt),
        amount: json.amount,
        shippings: json.shippings
      }
      onCompleted(order);
    }, 500);
  }

  const presentOrder = (order:Order) => {
    const output:string[] = printOrder(order);
    updateOrderInfo(output);
  }
  
  const updateOrderInfo = (info: string[]) => setOrderInfo(info);

  return (
    <div>
      <Progress isVisible={isLoading} />
      <OrderInfo orderInfo={orderInfo} />
    </div>
  );
}

export default App;
