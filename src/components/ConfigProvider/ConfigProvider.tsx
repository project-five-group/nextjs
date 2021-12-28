import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'lib';

import { MediaProvider } from './units';

export const ConfigProvider: FC = ({ children }) => {
  return (
    <ThemeProvider {...{ theme }}>
      <MediaProvider>{children}</MediaProvider>
    </ThemeProvider>
  );
};
