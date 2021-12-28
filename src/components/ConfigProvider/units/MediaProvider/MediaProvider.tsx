import { FC, createContext, useContext, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { useMedia } from 'lib';

export type TMediaContext = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export const INITIAL_MEDIA_CONTEXT: TMediaContext = {
  isDesktop: true,
  isTablet: false,
  isMobile: false,
};

const MediaContext = createContext<TMediaContext>(INITIAL_MEDIA_CONTEXT);

export const useMediaContext = () => useContext<TMediaContext>(MediaContext);

export const MediaProvider: FC = ({ children }) => {
  const { media } = useTheme();
  const isTablet = useMedia(`(max-width: ${media.tablet})`);
  const isMobile = useMedia(`(max-width: ${media.mobile})`);

  const context = useMemo<TMediaContext>(
    () => ({
      isDesktop: !isMobile && !isTablet,
      isMobile,
      isTablet,
    }),
    [isMobile, isTablet]
  );

  return <MediaContext.Provider value={context}>{children}</MediaContext.Provider>;
};
