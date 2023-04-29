# 안티그래비티 프론트엔드 기술과제

## 1. 사용 기술 및 라이브러리
- React v18
- Typescript
- **Api & Cache**
   - React-Query v4
- **스타일**
   - Scss
   - Css module
- **코딩 컨벤션**
   - Eslint
   - Prettier
   - Stylelint


## 2. 요구 중점 사항에 따른 변경 사항
*요구 중점 사항 중심으로만 코드 변경 하였습니다.* 

- **클라이언트와 서버 데이터를 분리하여 관리함으로써 유지보수에 용이**하도록 React-Query 사용(향후 백엔드 api 연결 시 promise화 및 fetch, 또는 axios 연결).
- React-Query의 isLoading을 이용하여 로딩 구현을 위한 boilerplate를 제거.
- **관심사 별로 코드의 유지보수가 용이** 하도록 컴포넌트 분리.
- 각 컴포넌트에 전달할 **서버 데이터의 가공을 위한 함수 로직 분리**.
- 향후 컴포넌트 추가를 위한 **확장성을 위해 `OrderBundle(배송 정보에 따른 물품 묶음 컴포넌트)` 합성 컴포넌트 이용**.
- 합성 컴포넌트 이용으로 **데이터 직접적 전달(props drilling 피함) 및 구성 컴포넌트 직관적 확인 가능으로 코드 해석 및 유지보수 용이**.
- 폴더 분리
  - [components]: App.tsx에서 공통적으로 사용하는 컴포넌트 파일
  - [hooks]: hook 파일
  - [utils]: 로직 함수 파일
  - [types]: interface 등 타입 관련 파일
  - [styles]: font, default, color 등의 디자인 관련 파일

## 3. 프로그램 구조
![useGetOrdersQuery](https://user-images.githubusercontent.com/67466789/235328337-e621b95a-9c45-404e-be75-67129c42a81e.jpg)


## 4. 예상과 다른 json 포맷 처리 방법 
배송 정보(shipping) 및 그에 따른 물품 정보(order product) 데이터 가공 로직 함수인 getOrderBundleData를 변경 합니다.
- 받아오는 서버 데이터에서 Shipping 컴포넌트와 Order Product 컴포넌트에 제공할 데이터 구분(shipping, products) 하여 값을 리턴 하도록 합니다.
- 가공 데이터 interface type 변경 합니다.
- 그에 따른 가공 함수 로직 변경 합니다. 

