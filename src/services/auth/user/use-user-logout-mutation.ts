import { useMutation } from 'react-query';
import { signOut } from '@firebase/auth';

import { auth } from 'services/client';

export const useUserLogoutMutation = () => useMutation(() => signOut(auth));
