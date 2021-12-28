import { FC } from 'react';

import { StyledFooter, StyledGlobal, StyledHeader } from './styled';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <StyledGlobal />
      <StyledHeader>Frontend.fit</StyledHeader>
      {children}
      <StyledFooter>footer</StyledFooter>
    </>
  );
};
