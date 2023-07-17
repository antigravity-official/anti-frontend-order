import axios from 'axios';
import { Order } from '../models/Order';
import assetOrder from '../assets/order.json';

export const fetchMyOrder = (): Promise<any> => {
  return new Promise((resolve) => setTimeout(() => resolve(assetOrder), 1000));
};

export const parseOrder = (json: any): Order => {
  return {
    id: json.id,
    orderAt: new Date(json.orderAt),
    amount: json.amount,
    shippings: json.shippings,
  };
};

/** 향후 서버에서 전달받을 json 포맷이 제공되었을 때 적용할 수 있는 코드 */
export const fetchMyOrderTest = (orderId: number, userId: string): Promise<Order> => {
  const REQ_URL = `https://fittingnote.com/myshop/order/list/${orderId}`;

  return axios
    .get(REQ_URL, {
      headers: {
        Authorization: `Bearer ${userId}`,
      },
    })
    .then((response) => {
      const data = response.data;
      const myOrder = parseOrderTest(data);
      return myOrder;
    });
};

/** 변경된 json 포맷이 예상과 다를 때 처리 방법 */
export const parseOrderTest = (json: any): Order => {
  try {
    if (!json || typeof json !== 'object') {
      throw new Error('유효한 주문 데이터를 찾을 수 없습니다.');
    }
    if (!json.id || !json.orderAt || !json.amount || !json.shipping) {
      throw new Error('주문 데이터가 완전하지 않습니다.');
    }

    const order: Order = {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      shippings: json.shipping,
    };

    return order;
  } catch (error) {
    console.error('주문 데이터 변환 중 오류 발생:', error);

    return {
      id: 0,
      orderAt: new Date(),
      amount: 0,
      shippings: [],
    };
  }
};
