import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

import { theme } from '../src/lib/theme';

const uiTheme = create({
  base: 'light',

  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.primary,

  appBg: theme.colors.white,
  appContentBg: theme.colors.white,
  appBorderColor: theme.colors.subLight,
  appBorderRadius: 4,

  fontBase: 'sans-serif',
  fontCode: 'monospace',

  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: theme.colors.primary,
  barSelectedColor: theme.colors.primary,
  barBg: theme.colors.light,

  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'p5.su',
  brandUrl: '/',
  brandImage: './images/logo.svg',

});

addons.setConfig({ theme: uiTheme });
