import { useQuery } from 'react-query';
import { collection, query } from '@firebase/firestore';
import { Union } from 'ts-toolbelt';

import { client } from 'services/client';

import { createConstraints, getCollection } from '../../helpers';

export const POST_QUERY_KEY = 'test';

type TResponse = Array<{
  value: string;
}>;

export const getPostQueryKey = (startAfter: Union.Nullable<string> = null) => [POST_QUERY_KEY, { startAfter }];

export const usePostQuery = (startAfter?: Union.Nullable<string>) => {
  const { data, refetch, ...rest } = useQuery<TResponse>(getPostQueryKey(startAfter), async ({ queryKey }) => {
    const [key, { startAfter }] = queryKey as [string, { startAfter: Union.Nullable<string> }];
    const constraints = createConstraints({ limit: 2, startAfter, orderBy: 'value' });

    return await getCollection<TResponse>(query(collection(client, key), ...constraints));
  });

  return {
    posts: data ?? [],
    ...rest,
  };
};
