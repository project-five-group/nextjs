import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

interface IMutationRecord<T extends HTMLOrSVGElement>
  extends Omit<MutationRecord, 'target'> {
  readonly target: T;
}

export interface IMutationCallback<T extends HTMLOrSVGElement> {
  (mutations: IMutationRecord<T>[], observer: MutationObserver): void;
}

const config: MutationObserverInit = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export const useMutationObserver = <
  T extends HTMLOrSVGElement = HTMLOrSVGElement
>(
  ref: MutableRefObject<HTMLElement | null>,
  callback: IMutationCallback<T>,
  options: MutationObserverInit = config
) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(
        callback as unknown as MutationCallback
      );

      observer.observe(ref.current, options);

      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};
