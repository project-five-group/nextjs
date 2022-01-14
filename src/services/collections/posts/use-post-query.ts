import { useQuery } from 'react-query';
import { Union } from 'ts-toolbelt';

import { getCollection } from 'services/helpers';
import { TConstraints } from 'services/types';

type TPost = {
  value: string;
};

const INITIAL_PARAMS: TConstraints<TPost> = {
  limit: 2,
  orderBy: 'value',
};

export const POST_QUERY_KEY = 'test';

export const getPostQueryKey = (params: Union.Nullable<TConstraints<TPost>> = null): [string, TConstraints<TPost>] => [
  POST_QUERY_KEY,
  { ...INITIAL_PARAMS, ...(params ?? null) },
];

export const usePostQuery = (params?: Union.Nullable<TConstraints<TPost>>) => {
  const { data, refetch, ...rest } = useQuery<TPost[]>(getPostQueryKey(params), getCollection);

  return {
    posts: data ?? [],
    ...rest,
  };
};
