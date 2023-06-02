import 'styled-components';
import { Color } from 'components/UI/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: { [key in Color]: string };
  }
}
