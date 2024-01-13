## FE 개발자 이연주 과제 제출 (Nuxt3)

> ##### 본 과제의 개발 요구사항의 개발 이전에, 데이터의 누락된 정보가 존재하여 추가적으로 구성 하였고,
> ##### 기존 데이터 및 향후 변경된 데이터에 해서 아래와 같이 각각 적용처리 해두었습니다.

[기존 데이터: old_order.json](./data/old_order.json)
[변경될 데이터: new_order.json](./data/new_order.json)

#### 누락된 데이터 항목추가

1. userId: 사용자의 uid / primary key
- type: string
2. orderUserName: 주문 받을 사람의 이름 (사용자의 이름과 다를 수 있음)
- type: string
3. orderUserMobile: 주문 받을 사람의 전화번호 (사용자 전화번호와 다를 수 있음)

> 위의 데이터 셋을 통해서 개발진행

응답 객체에 어떤 값을 전달해줄지 모르는 상태에서의 프로젝트이므로, 기본적으로 아래와 같은
응답 객체가 전달된다는 가정하에 진행입니다.

```interface
response: {
  success: boolean,
  responseCode: number | string,
  message: string,
  formatType: 'old' | 'new', // old: 기존 데이터, new: 변경된 데이터
  res: Order | null
}
```

# 과제 개발 요청사항

1. 유지보수가 용이하도록 프로그램을 **구조화해서** 리팩토링 해주세요.
3. 리팩토링 된 프로그램의 구조를 설명하는 간단한 설명서(또는 다이어그램)를 제공 해주세요.

#### View 레이아웃 구조
- 레이아웃, 페이지, 컴포넌트 구조는 아래와 같습니다.
- 컴포넌트는 Atomic Design Pattern에 따라 구성하였습니다.
- Header에 Label 언어 변경기능도 구현해 두었습니다.
- UnoCss 를 통해 Tailwind를 불러와서 사용하였습니다.
- eslint 를 통해 린팅처리를 하였습니다.


#### /stores
Pinia를 통해 조회한 주문에 대한 상태관리를 진행하였고,
Pinia PersistedState 를 통해 상태관리 하고 있는 데이터를 새션스토리지에 저장 가능하도록 설정 하였습니다.

#### /server
Nuxt3에서는 서버라우트도 진행할 수 있기에,
주어진 데이터를 /server 에서 조회해서 랜덤으로 이전 데이터와 변경될 데이터를 불러올 수 있도록 하였으며,
주석으로 변경될 데이터를 불러올 $fetch() 함수를 구현해 두었습니다.

index.vue 페이지에서 서버에서 호출되는 정보를 useAsyncData()를 통해, 헬퍼함수인 pending, refresh 를 통해서
로딩중 및 새로고침 처리가 가능하도록 구현하였습니다.

##### /types 
타입관리는, global.d.ts에 전역적으로 설정하여 사용하였습니다.

---

2. 향후 서버에서 전달받을 json 포맷이 제공되었을 때 **최소의 변경**으로 적용할 수 있도록 구성 해주세요.

- [Server.get.ts](./server/api/order/index.get.ts) 주석 교체
- [shipping.vue](./pages/shipping.vue) 에 주석처리된 `template` 만 제거 하면 됩니다.

---

4. 변경된 json 포맷이 예상과 다를 때 처리 방법에 대한 설명 포함

- 예상된 포멧으로 전달되지 않을 경우에 대한 예외처리는  [Server.get.ts](./server/api/order/index.get.ts) 에 try catch 문으로 작업 해두었습니다.

---

## 사용한 테크스택
- Nuxt3 (vue3)
- Nuxt/i18n
- Nuxt/icon
- Nuxt/time
- Typescript
- Pinia (Pinia persistedState)
- Eslint
- UnoCss