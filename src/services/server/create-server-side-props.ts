import { GetServerSidePropsContext, Redirect } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { mergeDeepLeft } from 'ramda';
import { Object, Union } from 'ts-toolbelt';
import { User } from '@firebase/auth';

import { AUTH_TOKEN } from '../constants';
import { createQueryClient, getCookie } from '../helpers';
import { USER_QUERY_KEY, parseUserFromServer } from '../auth';

import { firebaseAdmin } from './client';

interface TSSRData extends Record<string, unknown> {
  redirect?: Redirect;
  notFound?: true;
  props?: Record<string, any>;
}

type TServerSideProps = {
  pageType: 'public' | 'private' | 'hybrid';
  resolveData?: (
    queryClient: QueryClient,
    ctx: GetServerSidePropsContext
  ) => Promise<TSSRData | void> | TSSRData | void;
};

const getUser = (token: string) =>
  new Promise<Union.Nullable<Object.Partial<User>>>(resolve => {
    firebaseAdmin
      .auth()
      .verifyIdToken(token)
      .then(user => {
        resolve(parseUserFromServer(user));
      })
      .catch(() => resolve(null));
  });

export const createServerSideProps =
  ({ pageType, resolveData }: TServerSideProps) =>
  async (ctx: GetServerSidePropsContext) => {
    const queryClient = createQueryClient();

    const token = getCookie(AUTH_TOKEN, ctx);
    const user = token ? await getUser(token) : null;
    queryClient.setQueryData(USER_QUERY_KEY, user);

    const { notFound, redirect, ...nextProps } = (await resolveData?.(queryClient, ctx)) ?? {};

    if (notFound || redirect) return { notFound, redirect };

    const dehydratedState = dehydrate(queryClient);

    return { props: mergeDeepLeft({ dehydratedState }, nextProps) };
  };
