import { FC } from 'react';

import { useGoogleAuthMutation } from 'services';

import {
  StyledContent,
  StyledFooter,
  StyledGlobal,
  StyledHeader,
  StyledLayout,
  StyledRightBar,
  StyledSideBar,
} from './styled';

export const Layout: FC = ({ children }) => {
  const { mutate: authMutate, data } = useGoogleAuthMutation();

  return (
    <>
      <StyledGlobal />
      <StyledLayout>
        <StyledSideBar />
        <StyledContent>
          <StyledHeader style={{ margin: 20, fontSize: 50, fontWeight: 100 }}>Frontend.fit</StyledHeader>
          <button onClick={() => authMutate()}>auth</button>
          {children}
        </StyledContent>
        <StyledRightBar />
      </StyledLayout>
    </>
  );
};
