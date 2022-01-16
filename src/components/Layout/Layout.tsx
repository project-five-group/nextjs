import { FC } from 'react';

import {
  useGithubAuthMutation,
  useGoogleAuthMutation,
  useUserLogoutMutation,
  useUserQuery,
  useUserSignInMutation,
  useUserSignUpMutation,
} from 'services';

import { FormProvider, InputField, useForm } from '../Form';

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
              <TestLogin />
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

type TTestLogin = {
  email: string;
  password: string;
};

const TestLogin = () => {
  const signIn = useUserSignInMutation();
  const signUp = useUserSignUpMutation();

  const methods = useForm<TTestLogin>({
    onSubmit: values => signUp.mutateAsync(values),
  });

  return (
    <div style={{ backgroundColor: 'white', margin: 50, padding: 20, maxWidth: 400 }}>
      <FormProvider<TTestLogin> {...methods}>
        <InputField name="email" label="Email" />
        <InputField name="password" label="Пароль" />
        <button type="submit">submit</button>
      </FormProvider>
    </div>
  );
};
