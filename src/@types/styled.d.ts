import type {} from 'styled-components/cssprop';
import 'styled-components';

import { theme } from 'lib/theme';

declare module 'styled-components' {
  type TTheme = typeof theme;

  export interface DefaultTheme extends TTheme {}
}
