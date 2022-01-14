import { CollectionReference, Query, getDocs } from 'firebase/firestore';

export const getCollection = async <Data extends Record<string, any>[]>(
  collection: CollectionReference | Query
): Promise<Data> => {
  const data = await getDocs(collection);

  return data.docs.map(doc => doc.data()) as unknown as Data;
};
