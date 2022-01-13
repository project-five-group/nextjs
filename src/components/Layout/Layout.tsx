import { FC } from 'react';

import { useGoogleAuthMutation, useUserQuery } from 'services';

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
  const { user } = useUserQuery();

  return (
    <>
      <StyledGlobal />
      <StyledLayout>
        <StyledSideBar />
        <StyledContent>
          <span>{user?.displayName}</span>
          <StyledHeader style={{ margin: 20, fontSize: 50, fontWeight: 100 }}>Frontend.fit</StyledHeader>
          <button onClick={() => authMutate()}>auth</button>
          {children}
        </StyledContent>
        <StyledRightBar />
      </StyledLayout>
    </>
  );
};
