# 안티그래비티 프론트엔드 기술과제

### 구조
- ./src
   - store.ts redux 구성설정이 들어있습니다.
   - index.tsx
   - App.tsx
   - Model.tsx

- ./src/assets
   - order.json

- ./src/common
   공통으로 사용할만한 컴포넌트, 기능을 넣어뒀습니다.
   - ./util / formatter.ts
     - 날짜, 가격의 포멧을 변경합니다.

   - ./progress / Progress.tsx
     - 작업이 오래걸리는 경우 isVisible 값을 조정하여 프로그래스를 보여줍니다.

   - ./reducer / loadingSlice.tsx
     - 로딩상태에 따라 progress를 보여주는 일이 많을 수 있다고 생각하여
       전역상태로 관리하도록 변경했습니다.
     - 사용법
```shell
     import { useSelector, useDispatch } from 'react-redux'
     const dispatch = useDispatch();
     const isLoading = useSelector((state: RootState) => state.loading.isLoading)

     dispatch(showProgress)
     dispatch(hideProgress)
```

- ./src/order
  주문과 관련된 컴포넌트, 기능을 넣어뒀습니다.
  - OrderInfo.tsx : orderInfo를 배열로 랜더합니다.
  - ./row / OrderInfoLine.tsx
    - line prop 공백이 있을 경우 <br>태그를,
    없을 경우 <div>태그 내 내용을 랜더합니다.

  - ** printer.ts **
    - Order 를 출력할 수 있는 형태 string[]으로 변환해줍니다.
    - **예상과 서버에서 내려준 json이 다른 경우, 이 파일을 수정합니다.**


## json 이 예상과 다른 경우 아래와 같이 처리합니다.
   1. assets 내 예상과 다른 json 을 err.json으로 저장합니다.
   2. import assetOrder from './assets/order.json'; 경로를 err.json으로 변경합니다.
   3. 타입스크립트 에러메시지를 읽고 Model.ts 내 타입을 변경합니다.
   4. 변경된 타입에 맞추어 printer.ts , test 파일의 구조를 변경합니다.


## 라이브러리
리덕스 툴킷 (상태관리): https://redux-toolkit.js.org/api/configureStore
모멘트 (날짜, 시간 포맷): https://momentjs.com/docs/#/displaying/format/



### 테스트
- 동일한 이름의 파일 내 위치해있습니다.
[파일명].(tsx | ts)
[파일명].test.(tsx | ts)


- 테스트방법
```shell
npm test
```



----------------------------------------------------------------------

## 과제 내용

### 주제: 피팅노트 서비스를 리팩토링 해주세요.

### 제공 소스코드 설명
  - 주문내역을 보여주고 있습니다.
  - 주문내역(Order)에는 주문정보, N개의 상품(OrderProduct)과 1개의 배송정보(Shipping)로 구성되어 있습니다.
  - 뷰와 모든 로직이 모두 하나의 Component로 구현되어 있는 상태입니다.

### 변경 예정사항
  - 한 주문에 여러개의 상품이 여러곳으로 분리 배송될 수 있도록 변경이 필요합니다.
  - 한 주문정보에 여러개 배송정보로 구성되고, 한 배송정보에 여러개의 상품정보로 변경 될 예정입니다.
    - 기존: Order > Shipping + OrderProduct(n)
    - 변경: Order > Shipping(n) > OrderProduct(n)
  - 주문정보 표시는 배송정보를 중심으로 상품이 묶여서 표시되는 방식으로 변경되어야 합니다.
  - 변경작업은 백엔드와 함께 진행중이며 전달될 json은 <u>**_아직 정의되지 않았습니다._**</u>

### 과제 개발 요청 사항
1. 유지보수가 용이하도록 프로그램을 **구조화해서** 리팩토링 해주세요.
2. 향후 서버에서 전달받을 json 포맷이 제공되었을 때 **최소의 변경**으로 적용할 수 있도록 구성 해주세요.
3. 리팩토링 된 프로그램의 구조를 설명하는 간단한 설명서(또는 다이어그램)를 제공 해주세요.
   4. 변경된 json 포맷이 예상과 다를 때 처리 방법에 대한 설명 포함.

## 테크스택
- React
- Typescript
- (필요 시 환경 및 언어를 변경하실 수 있습니다.)
- (필요 시 라이브러리를 추가해서 사용하실 수 있습니다.)

## 중점사항
- 프로그램 구조 설계
- 코드의 유지보수 및 확장성
