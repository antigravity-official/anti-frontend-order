/* 주문 페이지 컴포넌트 */
import { useState, useEffect } from 'react';
import { orderData2JSON } from 'data/json';
import { Loading } from 'components/portal';
import { OrderPageComponent } from 'components/order';

const Order = () => {
  const [isLoading, setLoading] = useState<boolean>(false); /* 로딩중 유무 관리 */
  /* 주문 정보 데이터 저장 undefined 대신 null로 값이 비었음을 명시 */
  const [orderData, setOrderData] = useState<Order | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  /* 
  응답 값을 받아올 때 마다 type guard 체킹을 해야 하는지 궁금합니다. 
  검증해야 할 객체의 depth가 깊어지면 성능 이슈가 없는지도 궁금합니다.
  typeGuard를 사용해야 한다면, 효과적으로 관리할 수 있는 방법이 어떤 것이 있는지도 궁금합니다.
  */

  /* 존재하지 않는 property에 대한 강한 검사는 일단 하지 않음 */
  const stockTypeGuard = (stock: unknown): void => {
    if (!stock || typeof stock !== 'object') throw new Error('stock이 객체 타입이 아닙니다.');

    if (!('color' in stock) || typeof stock.color !== 'string')
      throw new Error('stock.color가 없거나 string 타입이 아닙니다.');
    if (!('band' in stock) || typeof stock.band !== 'string')
      throw new Error('stock.band가 없거나 string 타입이 아닙니다.');
    if (!('cup' in stock) || typeof stock.cup !== 'string')
      throw new Error('stock.cup이 없거나 string 타입이 아닙니다.');
    if (!('quantity' in stock) || typeof stock.quantity !== 'number')
      throw new Error('stock.quantity가 없거나 number 타입이 아닙니다.');
  };

  const productListTypeGuard = (productList: unknown): void => {
    if (!Array.isArray(productList)) throw new Error('productList가 배열이 아닙니다.');

    productList.forEach((product: unknown, idx: number) => {
      if (!product || typeof product !== 'object') throw new Error(`productList[${idx}]가 없거나 객체가 아닙니다.`);

      if (!('id' in product) || typeof product.id !== 'number')
        throw new Error(`productList[${idx}].id가 없거나 number 타입이 아닙니다.`);
      if (!('name' in product) || typeof product.name !== 'string')
        throw new Error(`productList[${idx}].name이 없거나 string 타입이 아닙니다.`);
      if (!('imageUrls' in product) || !Array.isArray(product.imageUrls))
        throw new Error(`productList[${idx}].imageUrls 없거나 배열이 아닙니다.`);
      /* url의 개수에 따라 추가 검증 여부를 정할 수 있을 것 같습니다.*/
      if (!('price' in product) || typeof product.price !== 'number')
        throw new Error(`productList[${idx}].price가 없거나 number 타입이 아닙니다.`);
      if (!('stock' in product)) throw new Error(`productList[${idx}].stock이 없습니다.`);

      stockTypeGuard(product.stock);
    });
  };
  const shippingListTypeGuard = (shippingList: unknown): void => {
    if (!Array.isArray(shippingList)) throw new Error('shippingList가 배열 타입이 아닙니다.');

    shippingList.forEach((shipping: unknown, idx: number) => {
      if (!shipping || typeof shipping !== 'object') throw new Error(`shippingList[${idx}]가 없거나 객체가 아닙니다.`);

      if (!('id' in shipping) || typeof shipping.id !== 'number')
        throw new Error(`shippingList[${idx}].id가 없거나 number 타입이 아닙니다.`);
      if (!('trackingNumber' in shipping) || typeof shipping.trackingNumber !== 'string')
        throw new Error(`shippingList[${idx}].trackingNumber가 없거나 string 타입이 아닙니다.`);
      if (!('shippingFee' in shipping) || typeof shipping.shippingFee !== 'number')
        throw new Error(`shippingList[${idx}].shippingFee가 없거나 number 타입이 아닙니다.`);
      if (!('address' in shipping) || typeof shipping.address !== 'string')
        throw new Error(`shippingList[${idx}].address 없거나 string 타입이 아닙니다.`);
      if (!('post' in shipping) || typeof shipping.post !== 'string')
        throw new Error(`shippingList[${idx}].post 없거나 string 타입이 아닙니다.`);
      if (!('message' in shipping) || typeof shipping.message !== 'string')
        throw new Error(`shippingList[${idx}].message 없거나 string 타입이 아닙니다.`);
      if (!('productList' in shipping)) throw new Error(`shippingList[${idx}].productList가 없습니다.`);

      productListTypeGuard(shipping.productList);
    });
  };

  const orderTypeGuard = (order: unknown): void => {
    const dateTypeCheckReg = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/;

    if (!order || typeof order !== 'object') throw new Error(`order가 없거나 객체 타입이 아닙니다.`);

    if (!('id' in order) || typeof order.id !== 'number') throw new Error(`order.id가 없거나 number 타입이 아닙니다.`);
    if (!('orderAt' in order) || typeof order.orderAt !== 'string' || !order.orderAt.match(dateTypeCheckReg)) {
      throw new Error(`order.orderAt이 yyyy-mm-dd hh:mm:ss 형식의 문자열이 아닙니다.`);
    }
    if (!('amount' in order) || typeof order.amount !== 'number')
      throw new Error(`order.amount가 없거나 number 타입이 아닙니다.`);
    if (!('shippingList' in order)) throw new Error(`order.shippingList 없습니다.`);

    shippingListTypeGuard(order.shippingList);
  };

  /* JSON으로 부터 주문 정보를 불러옴. 백엔드 API의 역할을 한다. */
  const fetchOrderData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(orderData2JSON); /* import 해온 json 파일을 resolve 함. 성공의 경우만 다룸.*/
      }, 1000); /* 데이터를 불러 오는데 1초가 걸린다고 가정*/
    });
  };

  /* 불러온 주문 정보를 Order타입의 order객체로 반환함 */
  const parseOrderData = (json: any): Promise<Order> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        /* json으로 또는 res.data로 받아온 값이 Order와 규격이 맞는지 확인한다.*/
        try {
          orderTypeGuard(json);
          const { id, orderAt, amount, shippingList } = json;
          const _order: Order = {
            id: id,
            orderAt: new Date(orderAt) /* Date 형식으로 변환 */,
            amount: amount,
            shippingList: shippingList,
          };
          resolve(_order);
        } catch (err) {
          reject(err);
        }
      }, 500);
    });
  };

  const orderDataUpdate = async () => {
    showProgress();
    const _fetchData = await fetchOrderData();
    try {
      const _parseOrderData = await parseOrderData(_fetchData);
      setOrderData(_parseOrderData);
      setErrorMessage(null);
    } catch (err) {
      setErrorMessage('서버 응답값에 문제가 있습니다.');
      console.log(err);
    } finally {
      hideProgress();
    }
  };

  useEffect(() => {
    orderDataUpdate();
  }, []); /* dependency를 비워두는 것이 바람직 하진 않지만 , did mount 효과를 위해서. */

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        orderData && <OrderPageComponent order={orderData} />
      )}
    </>
  );
};

export default Order;
