import { getDocs } from 'firebase/firestore';
import { collection, query } from '@firebase/firestore';
import { Object } from 'ts-toolbelt';
import { QueryConstraint, limit, orderBy, startAfter } from '@firebase/firestore';
import { QueryFunctionContext } from 'react-query';

import { client } from 'services/client';
import { TConstraints } from 'services/types';

export const getCollection = async <Data extends Record<string, any>[]>({
  queryKey,
}: QueryFunctionContext): Promise<Data> => {
  const [key, params] = queryKey as [string, Object.Nullable<TConstraints>];
  const c = (params ?? {}) as TConstraints;

  const constraints = [
    c.orderBy ? orderBy(c.orderBy) : null,
    c.startAfter ? startAfter(c.startAfter) : null,
    c.limit ? limit(c.limit) : null,
  ].filter(Boolean) as QueryConstraint[];

  const docsCollection = query(collection(client, key), ...constraints);
  const data = await getDocs(docsCollection);

  return data.docs.map(doc => doc.data()) as Data;
};
