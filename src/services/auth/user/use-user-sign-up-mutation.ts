import { useMutation } from 'react-query';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';

import { auth } from 'services/client';

type TUserSignUpMutationRequest = {
  email: string;
  password: string;
};

export const useUserSignUpMutation = () =>
  useMutation<{}, Error, TUserSignUpMutationRequest>(async ({ email, password }) => {
    const signUp = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser!, {
      //TODO Необходимо реализовать форму регистрации
      displayName: 'test',
    });

    return signUp;
  });
