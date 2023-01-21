# 작업내용 설명서

## 구성

- 표준 node.js project 구성하였습니다.
- `npm install` 이후에 `npm start`로 실행할 수 있습니다.

## 주의사항

- production 빌드를 검증하지 않았습니다. 따라서 이 프로젝트는 개발용으로만 사용해야합니다.
- source map 생성을 비활성화하였습니다.
- http client 응답을 검증하지 않았습니다.
- msw를 사용하여 mock server를 구성하였습니다.

## 사용한 주요 라이브러리

### dependencies

- mui
- axios
- react-router-dom

### devDependencies

- **msw**: BE가 완성되지 않았을 때, BE의 인터페이스를 mock server로 구성하여 FE 개발을 진행할 수 있도록 도와주는 라이브러리입니다. 
- craco
- cross-env

## 폴더 구조

> 아래 폴더 구조는 next.js 구조를 참고하고, create-react-app을 기초로 하여 새롭게 구상한 폴더 구조입니다.

- public: 정적 파일
  - public/mockServiceWorkder.js: msw가 사용하는 mock server를 구성하는 파일입니다.
- src/api: FE -> BE 통신을 위한 HTTP Client(이 프로젝트의 경우, axios) 사용 함수들 모음입니다.
- src/features/* : 컴포넌트에 해당하는 tsx 파일과, use**.ts 파일을 작성하여 모아놓은 폴더입니다.
  - 컴포넌트는 보통 단일과 다수의 데이터를 렌더링할 목적으로 나뉘는데, 이는 그 데이터가 어떤 데이터에 속해있느냐에 따라 목적과 비즈니스가 달라질 수 있기 때문에 되도록 상세히 나눠질 수 있도록 구성하였습니다.
  - 예를들어 product가 그냥 product, order-product, shipping-product, cart-product 등으로 나뉘어야 하는 경우를 생각해볼 수 있습니다.
  - 그러나 그들 중에서도 공통 product가 필요하다면 단순히 features/product/* 폴더에 `CommonSingleProduct.tsx` 등으로 정의할 수도 있습니다.
  - 거기에 실제 비즈니스 (이 샘플에서는 READ밖에 없지만)를 추가해야 한다면, 각 용도에 따라 비즈니스를 hook에 가두고 그 hook이 무분별하고 무질서하게 import되는 것을 제어할 필요가 있습니다. (프론트엔드 리드의 코드리뷰 업무에 포함됩니다.)
- src/globals: Webapp에 필요한 전역 객체들을 정의하였습니다. 디자인 테마, HTTP Client등이 포함됩니다.
  - 이곳저곳에서 import되는 형태가 아닌, Context Provider가 제공하는 형태로 사용될 수 있도록 하는 형태의 object들을 모아놓습니다.
  - 이후 i18n 지원이 필요하다면 이곳에 추가될 수 있습니다.
- src/layouts: 페이지의 레이아웃을 정의합니다.
  - 레이아웃은 페이지의 공통적인 부분을 정의합니다. 예를들어, 헤더, 푸터, 사이드바, 모달 등이 있습니다.
  - 레이아웃에서는 절대로 비즈니스 로직이 들어가서는 안됩니다.
  - 레이아웃은 페이지만을 위해 존재하는 편이 좋지만, 그렇지 않은 경우도 있습니다. 예를들어, 모달들의 공통형태를 레이아웃으로 정의할 수도 있습니다.
- src/utils: (이 프로젝트에서는 사용하지 않음) 공통으로 흔히 사용되는 함수들을 모아놓은 폴더입니다.
  - 비즈니스 업데이트 함수들은 제외됩니다. 그 함수들은 reducer에 포함되는 편이 좋습니다.
  - validation 함수, date 함수, string 변형 함수 등이 여기에 포함됩니다.
- src/mocks:
  - mocks/fixtures: mock data를 모아놓은 폴더입니다.
    - database에 해당합니다.
  - mocks/handlers: msw를 사용하여 mock server를 구성하기 위한 handler들을 모아놓은 폴더.
    - BE의 Controller에 해당합니다. mock server이기 때문에, service나 filter, adapter, guard등은 생략되는 형태입니다.
  - mocks/{browser|handlers|server}.ts: msw를 구동하기 위해 필요한 필수 파일들을 구성한 파일들입니다. 이 파일명 이외엔 사용하지 말아야합니다. 
    - `server.ts`의 경우, test코드를 구성해야한다면 사용해야합니다. 지금은 없습니다.
- src/pages/\*\*/*.ts: 이 webapp이 렌더링되는 페이지들을 모아놓은 폴더입니다. next.js에서 영감을 받았습니다.
- src/types.ts: 백엔드에서 주는 인터페이스들을 타입으로 정의하였습니다. 
- src/App.tsx: 이 webapp을 논리적으로 App으로 바라보고 정의한 파일입니다. create-react-app에서 기본적으로 주는 파일입니다.
  - webapp이 응용프로그램으로써 역할을 하는 부분의 논리적 Root이므로, 여기서부터가 실질적으로 유저가 인식하는 부분입니다.
- src/index.tsx: 이 webapp을 DOM과 연결하여 Browser와의 상호작용을 정의한 파일입니다. create-react-app에서 기본적으로 주는 파일입니다.
  - 추후 redux, 혹은 Global Context Provider(예: react-query의 `QueryClientProvider`) 필요하다면 이곳에 들어가야함.
- src/react-app-env.d.ts: create-react-app에서 기본적으로 주는 파일입니다. (삭제권장하지않음)
- src/reportWebVitals.ts: create-react-app에서 기본적으로 주는 파일입니다. (삭제가능)
- src/setupTests.ts: create-react-app에서 기본적으로 주는 파일입니다. 테스트코드 작성에 필요합니다.

## json 포맷이 변경되었을 때의 대응법

1. `src/mocks/fixtures` 폴더에 있는 json 파일들을 수정한다.
2. `src/mocks/handlers` 폴더에 있는 handler를 수정하거나 추가한다.
3. 필요하다면, `types/\*\*/*.ts` 내용을 수정한다.
4. 3.이 선행되었다면 tsc(혹은 그에 준하는 컴파일러)를 실행하여 에러에 맞춰 그에 따라 Props가 받아가는 타입들의 불일치를 수정한다.


## QnA

1. 왜 `Pick<Type, typeof Type>`을 사용하였나?
    - View에서 보여줘야하는 내용과 Model은 차이가 날 수도 있기 때문입니다.
    - 만약 제외하거나 추가해야 한다면, Omit이나 Intersection Type 등을 사용하여 수정하기 용이한 형태가 됩니다.
    - 프로젝트가 복잡화되었을 때 `typeof Type` 부분에서 문제가 될 수 있는데, 이 부분에서는 팀 리드의 TS지원이 꼭 필요합니다.
2. 왜 type대신 interface를 사용하였나?
     - 기능적 차이를 전혀 발견하지 못했으나, interface가 사용하기 좀 더 불편합니다. 따라서 취향에따라 선택하였습니다.
3. 왜 hooks의 type과 Component의 Prop이 받아가는 type이 서로 달라보이는가?
    - hooks는 비즈니스를 다루고, Component는 View를 다루기 때문입니다.
    - 실제로 의미하는 type들은 서로 같거나 혹은 hooks의 type쪽이 Prop type을 포함하는 형태가 되는 것을 권장합니다.
    - 어디까지나 Component는 비즈니스 코드를 '표현'하는 형태여야합니다. 비즈니스와 독립하여야, 야근을 피할 수 있습니다.
4. 왜 pages폴더를 정의하였나?
    - 유저가 보는 Browser의 주소창에 직접 보이는 url과 컴포넌트 이름을 대체로 매핑시킨다면, 개발자가 더욱 직관적으로 개발할 수 있습니다.
5. 왜 layout폴더를 정의하였나? features, 혹은 components 폴더에 넣을 수 있지 않았나?
    - 이것을 Component로 바라볼 수도 있지만, 그렇게 된다면 꼭 공통적인 부분에 비즈니스가 들어가 나중에 그 비즈니스때문에 재활용할 수 없는 상황이 생깁니다. 그래서 따로 정의하였습니다.
6. 왜 craco를 사용하였나? cra에서도 absolute path를 정의할 수 있는데
    - `@/*` 형태의 absolute path를 선호합니다. 어떤 npm package도 `@/*`를 사용할 수 없기 때문입니다.
7. 왜 mui를 사용하였나?
    - dark mode를 가장 쉽고 빠르게 적용햘 수 있으며, 많은 기본 컴포넌트들이 있는데다 가장 익숙합니다.


## 작업자로부터의 질문

1. 처음 주어진 `App.tsx`는 귀사에서 사용중인 코드 혹은 그와 비슷한 스타일입니까?
2. 처음 주어진 repository의 상태는 귀사에서 사용중인 구조와 비슷한 스타일입니까?
3. 현재 주어진 json파일에 해당하는 Backend측의 DTO는 실제로 어떻게 정의되어있습니까?
4. Backend측의 DB는 어떤식으로 정의합니까? RDBMS를 사용합니까, NoSQL을 사용합니까?
5. 이 웹앱은 어떤 목적입니까? 단순히 코딩테스트 목적입니까? 아니면 실제로 사용할 수도 있는 웹앱입니까?
6. 이 웹앱이 실제로 쓰인다면, 예상 유저는 누구입니까? 일반 유저입니까 아니면 이 웹앱을 Admin형태로 사용하는 직원입니까?
7. 이 웹앱이 실제로 쓰인다면, 어떤 식으로 deploy가 이뤄집니까?
8. 이 웹앱이 실제로 쓰인다면, 몇 명의 인원이 개발과 유지보수에 참여합니까?
9. 이 웹앱이 실제로 쓰인다면, 어떤 식으로 테스트가 이뤄져야 합니까?



-----

읽어주셔서 감사합니다.