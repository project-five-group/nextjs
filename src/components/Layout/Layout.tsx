import { FC } from 'react';

import { useGithubAuthMutation, useGoogleAuthMutation, useUserLogoutMutation, useUserQuery } from 'services';

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
  const { user } = useUserQuery();
  const { mutate: googleSignIn, data } = useGoogleAuthMutation();
  const { mutate: githubSignIn } = useGithubAuthMutation();
  const { mutate: handleLogout } = useUserLogoutMutation();

  console.log(data);

  return (
    <>
      <StyledGlobal />
      <StyledLayout>
        <StyledSideBar />
        <StyledContent>
          <StyledHeader style={{ margin: 20, fontSize: 50, fontWeight: 100 }}>Frontend.fit</StyledHeader>
          {!user ? (
            <>
              <button onClick={() => googleSignIn()}>auth google</button>
              <button onClick={() => githubSignIn()}>auth github</button>
            </>
          ) : (
            <button onClick={() => handleLogout()}>logout</button>
          )}
          {children}
        </StyledContent>
        <StyledRightBar />
      </StyledLayout>
    </>
  );
};
