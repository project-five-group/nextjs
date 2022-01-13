import { QueryFunctionContext, useQuery } from 'react-query';
import { DocumentSnapshot, collection, query } from '@firebase/firestore';
import { Union } from 'ts-toolbelt';

import { client } from 'services/client';

import { createConstraints, getCollection } from '../../helpers';

export const POST_QUERY_KEY = 'users';

export const getPostCollection = async ({ queryKey }: QueryFunctionContext) => {
  const [, { lastSnapshot: startAfter }] = queryKey as [string, { lastSnapshot: DocumentSnapshot }];

  const constraints = createConstraints({ limit: 2, startAfter });

  return await getCollection<{ author: string }[]>(query(collection(client, POST_QUERY_KEY), ...constraints));
};

export const usePostQuery = (lastSnapshot: Union.Nullable<DocumentSnapshot>) => {
  const { data, refetch, ...rest } = useQuery([POST_QUERY_KEY, { lastSnapshot }], getPostCollection);

  return {
    posts: data ?? [],
    ...rest,
  };
};
