import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { Object } from 'ts-toolbelt';
import { User } from '@firebase/auth';

export const parseUserFromServer = (user: DecodedIdToken): Object.Partial<User> => ({
  displayName: user.name,
  email: user.email,
  emailVerified: user.email_verified,
  uid: user.uid,
  photoURL: user.picture,
});
