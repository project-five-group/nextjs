import { ForwardedRef, MutableRefObject, useCallback, useRef } from 'react';

export const useForkForwardedRef = <T extends HTMLElement = HTMLDivElement>(
  forwardedRef: ForwardedRef<T>
): [(element: T) => void, MutableRefObject<T | null>] => {
  const forkedRef = useRef<T | null>(null);

  const setRef = useCallback(
    (element: T) => {
      forkedRef.current = element;
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(element);
        } else forwardedRef.current = element;
      }
    },
    [forwardedRef]
  );

  return [setRef, forkedRef];
};
