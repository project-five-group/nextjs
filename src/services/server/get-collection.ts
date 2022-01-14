import { firestore } from 'firebase-admin';
import { uniq } from 'ramda';
import { Object } from 'ts-toolbelt';
import { QueryFunctionContext } from 'react-query';

import { TConstraints } from '../types';

import { getServerClient } from './client';

const createQuery = (query: firestore.Query, constraints: Object.Nullable<TConstraints>) => {
  let collection = query;

  if (constraints)
    for (const key in constraints) {
      const methodName = key as keyof TConstraints;
      const arg = constraints[methodName];

      collection = collection[methodName]?.(arg);
    }

  return collection;
};

export const getCollection = async ({ queryKey }: QueryFunctionContext) => {
  const [key, params] = queryKey as [string, Object.Nullable<TConstraints>];
  const db = getServerClient().firestore();
  const collection = createQuery(db.collection(key), params);
  const data = await collection.get();

  return uniq(data.docs.map(doc => doc.data()));
};
