import { useMutation } from 'react-query';
import { signInWithEmailAndPassword } from '@firebase/auth';

import { auth } from 'services/client';

type TUserSignInMutationRequest = {
  email: string;
  password: string;
};

export const useUserSignInMutation = () =>
  useMutation<{}, Error, TUserSignInMutationRequest>(({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  });
