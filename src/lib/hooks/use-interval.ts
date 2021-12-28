import { useEffect } from 'react';

import { useLatest } from './use-latest';

type TUseIntervalFn = () => void;

export const useInterval = (
  callback: TUseIntervalFn,
  delay?: number | null
) => {
  const stableCallback = useLatest(callback ?? (() => {}));

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => stableCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
  }, [delay, stableCallback]);
};
