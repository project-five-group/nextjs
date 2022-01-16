import styled, { css } from 'styled-components';

import { hexToRgba } from 'lib';

import { Typography } from '../Typography';

export const StyledInputBox = styled.div`
  position: relative;
`;

export const StyledInputContent = styled.div<{ isFocused?: boolean }>`
  position: relative;
  height: 56px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme, isFocused }) => (isFocused ? theme.colors.link : theme.colors.subLight)};
  cursor: text;
  background-color: ${({ theme, isFocused }) => (isFocused ? theme.colors.white : hexToRgba(theme.colors.light, 0.5))};
  transition-property: background-color, border, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      box-shadow: 0 0 0 2px ${hexToRgba(theme.colors.link, 0.3)};
    `}
`;

export const StyledLabel = styled(Typography)<{ isFocused?: boolean }>`
  position: absolute;
  user-select: none;
  transform: ${({ isFocused }) => `translate(${isFocused ? '-15px,-3px' : '0px, 6px'}) scale(${isFocused ? 0.75 : 1})`};
  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  color: ${({ theme, isFocused }) => hexToRgba(theme.colors.black, isFocused ? 0.8 : 0.5)};
`;

export const StyledInput = styled.input`
  margin-top: 18px;
  border: 0;
  font-size: 16px;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
