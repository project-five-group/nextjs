import { useMutation } from 'react-query';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

import { auth } from 'services/client';

export const useGoogleAuthMutation = () =>
  useMutation(() => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  });
