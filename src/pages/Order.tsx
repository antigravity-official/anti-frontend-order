/* 주문 페이지 컴포넌트 */
import { useState, useEffect } from 'react';
import { orderDataJSON } from 'data/json';
import { ShippingCard } from 'components/order';
import { Loading } from 'components/portal';


import * as CommonStyle from 'styles/Common.style';
import * as OrderStyle from 'styles/Index/Order.style';
const Order = () => {
  const [isLoading, setLoading] = useState<boolean>(false); /* 로딩중 유무 관리 */
  const [orderData, setOrderData] = useState<Order | null>(
    null,
  ); /* 주문 정보 데이터 저장 undefined 대신 null로 값이 비었음을 명시 */

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  /* JSON으로 부터 주문 정보를 불러옴. 백엔드 API의 역할을 한다. */
  const fetchOrderData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(orderDataJSON); /* import 해온 json 파일을 resolve 함. 성공의 경우만 다룸.*/
      }, 1000); /* 데이터를 불러 오는데 1초가 걸린다고 가정*/
    });
  };

  /* 불러온 주문 정보를 Order타입의 order객체로 반환함 */
  const parseOrderData = (json: any): Promise<Order> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          /* json으로 또는 res.data로 받아온 값이 Order와 규격이 맞는지 확인한다.*/
          const _order: Order = {
            id: json?.id,
            orderAt: new Date(json?.orderAt) /* Date 형식으로 변환 */,
            amount: json?.amount,
            shippingList: json?.shippingList,
          }; // 옵셔널 체이닝을 이용해 런타임 에러를 막는다
          resolve(_order);
        } catch (error) {
          /* 에러 발생시 reject한다. */
          reject(error);
        }
      }, 500);
    });
  };

  const orderDataUpdate = async () => {
    showProgress();
    const _fetchData = await fetchOrderData();
    const _parseOrderData = await parseOrderData(_fetchData);
    setOrderData(_parseOrderData);
    hideProgress();
  };
  useEffect(() => {
    orderDataUpdate();
  }, []); /* dependency를 비워두는 것이 바람직 하진 않지만 , did mount 효과를 위해서. */

  return (
    <>
      {isLoading && <Loading/>}
      {!isLoading&& orderData && (
        <OrderStyle.Wrapper>
          <CommonStyle.PageTitle>주문 내역</CommonStyle.PageTitle>
          <OrderStyle.OrderInfo>
            <CommonStyle.SubTitle>주문 정보</CommonStyle.SubTitle>
            <p>주문 번호 : {orderData.id}</p>
            <p>주문 날짜 : {orderData.orderAt.toISOString().substring(0, 19).replace('T', ' ')}</p>
            <p>
              총 결제 금액 : <strong>{orderData.amount}</strong>원
            </p>
          </OrderStyle.OrderInfo>
          <OrderStyle.ShippingList>
            {orderData?.shippingList.map((shipping) => {
                return <ShippingCard key={shipping.id} shipping={shipping} />;
            })}
          </OrderStyle.ShippingList>
        </OrderStyle.Wrapper>
      )}
    </>
  );
};

export default Order;
