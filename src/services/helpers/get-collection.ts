import { CollectionReference, Query, QueryDocumentSnapshot, getDocs } from '@firebase/firestore';

type TReturnCollection<T = Array<Record<string, any>>> = Array<T & { _doc: QueryDocumentSnapshot<T> }>;

export const getCollection = async <Data extends Record<string, any>[]>(
  collection: CollectionReference | Query
): Promise<TReturnCollection<Data>> => {
  const data = await getDocs(collection);

  return data.docs.map(doc => ({ ...doc.data(), _doc: doc })) as unknown as TReturnCollection<Data>;
};
