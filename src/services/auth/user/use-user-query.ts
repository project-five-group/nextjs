import { useQuery, useQueryClient } from 'react-query';
import { User, onAuthStateChanged } from '@firebase/auth';
import { Union } from 'ts-toolbelt';

import { useMount } from 'lib';
import { auth } from 'services/client';
import { deleteCookie, setCookie } from 'services/helpers';
import { AUTH_TOKEN } from 'services/constants';

export const USER_QUERY_KEY = 'session/user';

const REFRESH_TOKEN_TIME = 10 * 60 * 1000;

const forceRefreshToken = () => {
  if (auth.currentUser) return auth.currentUser.getIdToken(true);
};

export const useUserQuery = () => {
  const { data, ...rest } = useQuery<Union.Nullable<User>>(USER_QUERY_KEY);

  return { user: data, ...rest };
};

export const useUserVerify = () => {
  const qc = useQueryClient();

  useMount(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) setCookie(AUTH_TOKEN, await user.getIdToken());
      else deleteCookie(AUTH_TOKEN);

      qc.setQueryData(USER_QUERY_KEY, user);
    });

    const refreshToken = setInterval(forceRefreshToken, REFRESH_TOKEN_TIME);

    return () => {
      unsubscribe();
      clearInterval(refreshToken);
    };
  });

  return null;
};
