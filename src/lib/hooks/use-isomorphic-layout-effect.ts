import { useEffect, useLayoutEffect } from 'react';

import { isClient } from '../helpers';

export const useIsomorphicLayoutEffect = isClient()
  ? useLayoutEffect
  : useEffect;
