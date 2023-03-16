import { DefaultTheme } from 'styled-components'; // 기본 테마 설정을 위해서

/* 주로 사용하는 폰트 사이즈, 색상, 테마 종류는 파일별 선언 가능 */
const fontSize = {
  header_1: '44px',
  header_2: '36px',
  header_3: '32px',
  header_4: '28px',
  header_5: '24px',
  subtitle_1: '20px',
  subtitle_2: '18px',
  body_1: '16px',
  body_2: '14px',
  caption: '12px',
};

const colors = {
  textColor: '#212121',
  borderColor: '#d6d6d6',
  backgroundColor: '#f4f4f4',
  blackColors: {
    grey_900: '#212121',
    grey_800: '#424242',
    grey_700: '#616161',
    grey_600: '#757575',
    grey_500: '#9e9e9e',
    grey_400: '#bdbdbd',
    grey_300: '#e0e0e0',
    grey_200: '#eeeeee',
    grey_100: '#f5f5f5',
    grey_50: '#fafafa',
  },
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

/* 타입스크립트에서 DefaultTheme를 사용하려면 interface를 선언해주어야 한다. 아니면 theme가 any타입으로 나오게 된다. */
declare module 'styled-components' {
  export interface DefaultTheme {
    // 여기에 적용하고 싶은 속성과 타입을 정의한다
    fontSize: FontSizeTypes;
    colors: ColorsTypes;
  }
}

export const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;