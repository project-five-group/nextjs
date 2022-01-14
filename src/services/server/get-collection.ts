import { firestore } from 'firebase-admin';
import { uniq } from 'ramda';

import { getServerClient } from './client';

export const getCollection = async (createCollection: (db: firestore.Firestore) => firestore.Query) => {
  const db = getServerClient().firestore();
  const collection = createCollection(db);
  const data = await collection.get();

  return uniq(data.docs.map(doc => doc.data()));
};
