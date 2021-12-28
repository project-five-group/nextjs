import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [state, setToggle] = useState(initialValue);

  const onToggle = useCallback(() => {
    setToggle(prevState => !prevState);
  }, []);

  return [state, onToggle];
};
