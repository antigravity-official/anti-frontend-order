import { createGlobalStyle } from 'styled-components'; // 스타일 초기화를 위해, 전역 스타일링 객체 생성
import reset from 'styled-reset'; // 스타일 '초기화'를 위해 reset css 를 불러온다. ( normalize와는 조금 다른 듯... )

export const GlobalStyle = createGlobalStyle` 
    ${reset}
    body{
         -webkit-font-smoothing: antialiased;
        font-family: 'Pretendard';
        display: block;
          p {
    margin-bottom: 8px;
  }
  strong{
    font-weight:900;
  }
    }   
    input [type='text']{
    -webkit-appearance: none; /* Safari input 그림자 제거 */
    border-radius:0;
    -webkit-border-radius: 0; /* Safari input 둥근 모서리 제거 */
  }

    body::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }     
`;
