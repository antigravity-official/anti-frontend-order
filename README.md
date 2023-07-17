# 안티그래비티 프론트엔드 기술과제

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
  - src/redux/apis/Order.ts 에 /** 향후 서버에서 전달받을 json 포맷이 제공되었을 때 적용할 수 있는 코드 */ 로 주석으로 작성함
3. 리팩토링 된 프로그램의 구조를 설명하는 간단한 설명서(또는 다이어그램)를 제공 해주세요.

src/
│
├── App.tsx
│
├── assets/
│   └── images/
│       ├── constants.ts
│       └── order.json
│
├── components/
│   ├── common/
│   │   ├── AddCommas.tsx
│   │   ├── Header.tsx
│   │   └── Loading.tsx
│   └── myOrder/
│       ├── OrderInfo.tsx
│       ├── ShippingInfo.tsx
│       └── ProductInfo.tsx
│
├── pages/
│   ├── Main.tsx
│   └── MyOrder.tsx
│
└── redux/
    ├── apis/
    │   └── Order.ts
    ├── slices/
    │   └── myOrderSlice.ts
    ├── types/
    │   └── myOrder/
    │       ├── Order.ts
    │       ├── Shipping.ts
    │       └── Product.ts
    └── store.ts
    
    
4. 변경된 json 포맷이 예상과 다를 때 처리 방법에 대한 설명 포함.
  - src/redux/apis/Order.ts 에 /** 변경된 json 포맷이 예상과 다를 때 처리 방법 */ 으로 주석으로 작성함

## 테크스택

- React
- Typescript
- Redux-Toolkit
- React-Router
- Tailwind CSS
- Axios

## 중점사항

- 프로그램 구조 설계
- 코드의 유지보수 및 확장성
