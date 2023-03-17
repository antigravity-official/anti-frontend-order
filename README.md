# 안티그래비티 프론트엔드 기술과제 - 전하영

전하영, 010-5427-4189

`npm run start` 로 실행하시면 `localhost:3000`에 로컬 서버가 열립니다.

------------------------------


## 구현 환경

- CRA + Typescript로 구현하였습니다.
- ESLint + Prettier 설정으로 코드 컨벤션을 맞추고 포맷팅 되도록 하였습니다.
- react-router-dom, styled-components를 사용하였습니다.

## 파일 구조

- `components` : 컴포넌트 파일 폴더
    - `common` : 공통으로 사용되는 컴포넌트 파일
    - `layout` : 앱 레이아웃 파일
    - `portal` : `react-portal`로 관리되는 모든 컴포넌트 관리
    - 기타 페이지 넘포넌트 별 폴더
- `pages` : 화면 구성 파일
- `data/json` : `mock json` 데이터 모음
- `styles` : 스타일 관련 파일 폴더
    - `font` : 폰트 설정 파일 폴더
    - `[pageName].style.ts` : 페이지 별 스타일 관리 파일
    - `GlobalStyle.ts` : 전역 스타일 관리 파일
- `theme` : styled-components 테마 파일
- `types` : 타입 관리 파일 폴더


## 사용한 라이브러리 
- react-router-dom
- styled-reset : 브라우저 별 스타일 초기화
- styled-components

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
