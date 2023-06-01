# 안티그래비티 프론트엔드 기술과제

## 요구사항 반영

#### 1. 배송 별로 여러개의 상품을 담을 수 있도록 변경했습니다.

```
기존: Order > Shipping + OrderProduct(n)
변경: Order > Shipping(n) > OrderProduct(n)

```

- `order.json`의 mock data를 각 Shipping별 해당하는 products 를 담을 수 있도록 했습니다.

#### 2. 하나의 페이지에 있던 부분을 컴포넌트 단위로 구조화시켰습니다.

- 크게 `Order`, `Shipping`, `Product` 3가지 컴포넌트로 나누어서 관리했습니다.
  - **Order** : 주문 정보
  - **Shipping** : 배송관련 정보
  - **Product** : 주문한 상품의 정보

<img src="" />

#### 3. `recoil`을 사용해 Order 데이터 state를 관리했습니다.

- 데이터를 fetch한 뒤 `useSetRecoilState`를 사용하여 상태를 업데이트 했습니다.
- `useOrderItem` custom hook에서 `useRecoilValue`를 사용하여 필요한 데이터를 가져오도록 했습니다.

이에 따라 order 상태를 여러 컴포넌트에서 사용할 수 있고 코드 중복을 줄일 수 있습니다.<br/>
추후 변경이 있을 경우, 해당 훅 내부 코드만 수정하면 되기 때문에 유지보수도 좋을 것이라 생각합니다.

##### 4. 변경된 json 포맷이 예상과 다를 때 처리 방법

- `ordersState` 를 업데이트 합니다.
  현재 `ordersState`의 타입이 **Order[]**로 정의되어있습니다.<br/>
  변경된 포맷에 맞게 `Order`에 정의된 데이터 형식응ㄹ 변경해야합니다. <br/>
  새로운 타입을 정의하거나 인터페이스를 수정하여 변경된 json과 일치하도록 변경해야합니다.

- `useFetchOrders` 로 데이터를 패치하도록 하는 custom hook입니다. <br/>
  서버에서 해당 데이터를 가져와 **Recoil에 상태를 업데이트**합니다.<br/>
  따라서 이 부분에서 데이터를 호출는 부분,<br/>
  가져온 response 데이터가 이전과 다른 형식이라면, 변경된 json포맷에 맞게 수정해야합니다.

## 테크스택

- React
- Typescript
- Recoil
- react-router-dom, styled-components
- axios
