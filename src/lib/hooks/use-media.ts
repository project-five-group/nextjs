import { useEffect, useState } from 'react';

import { isClient } from '../helpers';

import { useMountedState } from './use-mounted-state';

export const useMedia = (query: string, defaultState = false) => {
  const isMounted = useMountedState();
  const [state, setState] = useState(
    isClient() ? () => window.matchMedia(query).matches : defaultState
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (isMounted()) setState(mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mql.removeListener(onChange);
    };
  }, [isMounted, query]);

  return state;
};
