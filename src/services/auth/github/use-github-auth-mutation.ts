import { useMutation } from 'react-query';
import { GithubAuthProvider, signInWithPopup } from '@firebase/auth';

import { auth } from 'services/client';

export const useGithubAuthMutation = () =>
  useMutation(() => {
    const provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider);
  });
