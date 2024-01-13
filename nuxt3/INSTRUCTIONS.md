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

---

> 위의 데이터 셋을 통해서 개발진행

응답 객체에 어떤 값을 전달해줄지 모르는 상태에서의 프로젝트이므로, 기본적으로 아래와 같은
응답 객체가 전달된다는 가정하에 진행입니다.

```interface
response: {
  success: boolean,
  responseCode: number | string,
  message: string,
  formatType: 'old' | 'new',
  res: Order | null
}
```

기본적인 Atomic Structure 를 기반으로 각 기능에 필요한 컴포넌트를 분할하여,
향후에도 사용 가능한 구조로 생성할 예정 입니다.

1. 레이아웃 구조

2. 페이지 구조

3. 컴포넌트 구조

4. 서버 구조