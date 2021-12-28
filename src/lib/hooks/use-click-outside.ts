import { RefObject, useEffect, useRef } from 'react';

const EVENTS = ['mousedown', 'touchstart'];

const on = (...args: [string, (event: Event) => void]) =>
  document.addEventListener(...args);
const off = (...args: [string, (event: Event) => void]) =>
  document.removeEventListener(...args);

export const useClickOutside = (
  onClickOutside: () => void,
  refs: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[]
) => {
  const savedCallback = useRef(onClickOutside);

  useEffect(() => {
    savedCallback.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    const handler = (event: Event) => {
      const list = Array.isArray(refs) ? refs : [refs];
      let isTarget = false;

      for (const ref of list) {
        const { current: element } = ref;
        if (element && element.contains(event.target as Node)) {
          isTarget = true;
          break;
        }
      }

      if (!isTarget) savedCallback.current();
    };

    for (const eventName of EVENTS) {
      on(eventName, handler);
    }

    return () => {
      for (const eventName of EVENTS) {
        off(eventName, handler);
      }
    };
  }, [refs]);
};
