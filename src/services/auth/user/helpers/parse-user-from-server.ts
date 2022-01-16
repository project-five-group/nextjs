import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { O } from 'ts-toolbelt';
import { User } from '@firebase/auth';

export const parseUserFromServer = (user: DecodedIdToken): O.Partial<User> => ({
  uid: user.uid ?? null,
  email: user.email ?? null,
  displayName: user.name ?? null,
  photoURL: user.picture ?? null,
});
