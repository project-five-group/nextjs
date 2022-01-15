import { useQuery } from 'react-query';
import { Union } from 'ts-toolbelt';

import { clearNullable } from 'lib';
import { getCollection } from 'services/helpers';
import { TConstraints } from 'services/types';

type TPost = {
  value: string;
};

export type TPostConstraints = TConstraints<TPost>;

const INITIAL_PARAMS: TConstraints<TPost> = {
  limit: 2,
  orderBy: 'value',
};

export const POST_QUERY_KEY = 'test';

export const getPostQueryKey = (params: Union.Nullable<TPostConstraints> = null): [string, TPostConstraints] => [
  POST_QUERY_KEY,
  { ...INITIAL_PARAMS, ...clearNullable(params) },
];

export const usePostQuery = (params?: Union.Nullable<TPostConstraints>) => {
  const { data, refetch, ...rest } = useQuery<TPost[]>(getPostQueryKey(params), getCollection);

  return {
    posts: data ?? [],
    ...rest,
  };
};
