/** 서버에서 전달받을 api요청에 사용할 프레임워크 */
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { Order } from '../types/myOrder/Order';
import assetOrder from '../../assets/order.json';

export const fetchMyOrder = (): Promise<Order> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const parsedOrder = parseOrder(assetOrder);
      resolve(parsedOrder);
    }, 1000),
  );
};

export const parseOrder = (json: Order): Order => {
  return {
    id: json.id,
    orderAt: json.orderAt,
    amount: json.amount,
    shippings: json.shippings,
  };
};

/** 향후 서버에서 전달받을 json 포맷이 제공되었을 때 적용할 수 있는 코드 */
// export const fetchMyOrder = createAsyncThunk(
//   'myOrder/fetchMyOrder',
//   async (orderId: number, userId: string) => {
//     const REQ_URL = `https://fittingnote.com/myshop/order/list/${orderId}`;

//     const response = await axios.get(REQ_URL, {
//       headers: {
//         Authorization: `Bearer ${userId}`,
//       },
//     });
//     const data = response.data;
//     const myOrder = parseOrder(data);
//     return myOrder;
//   }
// );

/** 변경된 json 포맷이 예상과 다를 때 처리 방법 */
// export const parseOrder = (json: Order): Order => {
//   // 'try-catch' 블록 안에서 발생하는 모든 에러는 'catch' 블록에서 처리됨
//   try {
//     // 'json' 입력이 없거나 객체가 아니면 에러 발생
//     if (!json || typeof json !== 'object') {
//       throw new Error('유효한 주문 데이터를 찾을 수 없습니다.');
//     }
//     // 'json' 객체가 필요한 필드를 모두 가지고 있는지 확인. 하나라도 없으면 에러 발생
//     if (!json.id || !json.orderAt || !json.amount || !json.shippings) {
//       throw new Error('주문 데이터가 완전하지 않습니다.');
//     }
//     // 'json' 객체를 'Order' 타입으로 변환. 'orderAt' 필드는 문자열을 'Date' 객체로 변환
//     const order: Order = {
//       id: json.id,
//       orderAt: new Date(json.orderAt),
//       amount: json.amount,
//       shippings: json.shippings,
//     };
//     return order;
//   } catch (error) {  // 'try' 블록에서 발생한 에러 처리. 에러 발생시 콘솔에 에러 메시지 출력
//     console.error('주문정보 데이터 변환 중 오류 발생:', error);
//     return {  // 에러 발생시 빈 'Order' 객체 반환 => 기본값으로 채워짐
//       id: 0,
//       orderAt: new Date(),
//       amount: 0,
//       shippings: [],
//     };
//   }
// };
