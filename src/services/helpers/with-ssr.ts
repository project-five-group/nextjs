import { NextPage, NextPageContext, Redirect } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { mergeDeepLeft } from 'ramda';

import { createQueryClient } from './create-query-client';

interface TSSRData extends Record<string, unknown> {
  redirect?: Redirect;
  notFound?: true;
  props?: Record<string, any>;
}

export const withSSR = (
  Component: NextPage,
  resolveData: (queryClient: QueryClient, ctx: NextPageContext) => Promise<TSSRData | void> | TSSRData | void
) => {
  Component.getInitialProps = async ctx => {
    if (ctx.req) {
      const queryClient = createQueryClient();
      const { notFound, redirect, ...nextProps } = (await resolveData(queryClient, ctx)) ?? {};

      if (notFound || redirect) return { notFound, redirect };

      const dehydratedState = dehydrate(queryClient);

      return mergeDeepLeft({ dehydratedState }, nextProps);
    }

    return {};
  };

  return Component;
};
