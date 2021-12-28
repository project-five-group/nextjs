import { EffectCallback, useEffect, useRef } from 'react';

export const useConditionalMount = (
  effect: EffectCallback,
  condition: unknown
) => {
  const done = useRef(false);

  useEffect(() => {
    if (!done.current && condition) {
      effect();
      done.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition]);
};
