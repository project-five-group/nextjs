import { Object } from 'ts-toolbelt';
import { limit as DBLimit, startAfter as DBStartAfter, DocumentSnapshot, QueryConstraint } from '@firebase/firestore';

type TConstraints = {
  limit: number;
  startAfter: DocumentSnapshot;
};

export const createConstraints = ({ limit, startAfter }: Object.Nullable<TConstraints>): QueryConstraint[] => {
  return [startAfter ? DBStartAfter(startAfter) : null, limit ? DBLimit(limit) : null].filter(
    Boolean
  ) as QueryConstraint[];
};
