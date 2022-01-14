import { GetServerSidePropsContext } from 'next';
import { Union } from 'ts-toolbelt';
import nookies from 'nookies';
import { CookieSerializeOptions } from 'next/dist/server/web/types';

const COOKIE_OPTIONS: CookieSerializeOptions = {
  path: '/',
};

export const setCookie = (key: string, value: string, ctx?: Union.Nullable<GetServerSidePropsContext>) => {
  nookies.destroy(ctx, key);
  nookies.set(ctx, key, value, COOKIE_OPTIONS);
};

export const getCookie = (key: string, ctx?: Union.Nullable<GetServerSidePropsContext>): Union.Nullable<string> => {
  const cookies = nookies.get(ctx);

  return cookies[key];
};

export const deleteCookie = (key: string, ctx?: Union.Nullable<GetServerSidePropsContext>) => {
  nookies.destroy(ctx, key);
};
