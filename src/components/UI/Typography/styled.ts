import styled, { DefaultTheme, css } from 'styled-components';

import { getComponentStyle } from 'lib';

import { TTypography, TTypographyVariant } from './types';

interface IStyledTypography extends Pick<TTypography, 'type' | 'typographyStyle'> {
  theme: DefaultTheme;
  variant: TTypographyVariant;
}

const getTypographyStyle = ({ theme, variant }: IStyledTypography) => {
  switch (variant) {
    case 'h1':
      return css`
        font-size: 28px;
        line-height: 32px;
        font-weight: 700;

        @media (min-width: ${theme.media.mobile}) {
          font-size: 30px;
          line-height: 34px;
        }

        @media (min-width: ${theme.media.desktop}) {
          font-size: 45px;
          line-height: 49px;
        }
      `;
    case 'h2':
      return css`
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;

        @media (min-width: ${theme.media.tablet}) {
          font-size: 26px;
          line-height: 30px;
        }

        @media (min-width: ${theme.media.desktop}) {
          font-size: 35px;
          line-height: 39px;
        }
      `;
    case 'h3':
      return css`
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;

        @media (min-width: ${theme.media.tablet}) {
          font-size: 24px;
          line-height: 28px;
        }

        @media (min-width: ${theme.media.desktop}) {
          font-size: 30px;
          line-height: 34px;
        }
      `;
    case 'h4':
      return css`
        font-size: 15px;
        line-height: 19px;
        font-weight: 700;

        @media (min-width: ${theme.media.tablet}) {
          font-size: 16px;
          line-height: 20px;
        }

        @media (min-width: ${theme.media.desktop}) {
          font-size: 18px;
          line-height: 22px;
        }
      `;
    case 'h5':
      return css`
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;

        @media (min-width: ${theme.media.tablet}) {
          font-size: 14px;
          line-height: 18px;
        }

        @media (min-width: ${theme.media.desktop}) {
          font-size: 14px;
          line-height: 18px;
        }
      `;
    case 'paragraph':
      return css`
        font-size: 16px;
        line-height: 20px;
        font-weight: 450;
      `;
    case 'comment':
      return css`
        font-size: 14px;
        line-height: 18px;
        font-weight: 450;
      `;
    case 'link':
      return css`
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 16px;
        line-height: 20px;
        font-weight: 450;

        &:hover,
        &:focus {
          color: ${theme.colors.link};
          text-decoration: underline;
        }
      `;
  }
};

const getTypographyColor = ({ theme, variant, type }: IStyledTypography) => {
  switch (type) {
    case 'success':
      return theme.colors.success;
    case 'warning':
      return theme.colors.warning;
    case 'error':
      return theme.colors.primary;
    case 'comment':
      return theme.colors.subLight;
    case 'inherit':
      return 'inherit';
    default:
      return variant === 'link' ? theme.colors.link : theme.colors.black;
  }
};

export const StyledTypography = styled.div<IStyledTypography>`
  margin: 0;
  padding: 0;
  color: ${getTypographyColor};
  font-family: 'Roboto', sans-serif;

  ${getTypographyStyle};

  ${({ theme, typographyStyle }) => getComponentStyle(typographyStyle, { theme })};
`;
