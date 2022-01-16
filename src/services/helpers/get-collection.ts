import { getDocs } from 'firebase/firestore';
import { collection, query } from '@firebase/firestore';
import { Object } from 'ts-toolbelt';
import { QueryConstraint, limit, orderBy, startAfter } from '@firebase/firestore';
import { QueryFunctionContext } from 'react-query';

import { client } from 'services/client';
import { TConstraints } from 'services/types';

type TResponse = Record<string, unknown>;

type TQueryKey<Data extends TResponse> = [string, Object.Nullable<TConstraints<Data>>];

export const getCollection = async <Data extends TResponse[] = TResponse[], Item extends TResponse = Data[number]>(
  ctx: QueryFunctionContext | TQueryKey<Item>
): Promise<Data> => {
  const [key, params] = (Array.isArray(ctx) ? ctx : ctx.queryKey) as TQueryKey<Item>;
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
