import { forwardRef } from 'react';

import { combineClassNames } from 'lib';

import { TTypography } from './types';
import { StyledTypography } from './styled';

export const Typography = forwardRef<HTMLElement, TTypography>(
  ({ className, children, tag = 'span', variant = 'paragraph', ...rest }, ref) => (
    <StyledTypography
      className={combineClassNames(className, 'project-five-typography')}
      as={tag}
      {...{ ...rest, ref, variant }}
    >
      {children}
    </StyledTypography>
  )
);

Typography.displayName = 'Typography';
