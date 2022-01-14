import { Object } from 'ts-toolbelt';
import {
  limit as DBLimit,
  orderBy as DBOrderBy,
  startAfter as DBStartAfter,
  QueryConstraint,
} from '@firebase/firestore';

type TConstraints = {
  limit?: number;
  startAfter?: unknown;
  orderBy?: string;
};

export const createConstraints = ({ limit, startAfter, orderBy }: Object.Nullable<TConstraints>): QueryConstraint[] => {
  return [
    orderBy ? DBOrderBy(orderBy) : null,
    startAfter ? DBStartAfter(startAfter) : null,
    limit ? DBLimit(limit) : null,
  ].filter(Boolean) as QueryConstraint[];
};
