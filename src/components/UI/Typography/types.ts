import { ElementType, MouseEvent, ReactNode } from 'react';

import { TStyledComponentsProps } from 'lib';

export type TTypographyType = 'inherit' | 'comment' | 'success' | 'warning' | 'error';

export type TTypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'link' | 'paragraph' | 'comment';

type TBaseTypography = {
  type?: TTypographyType;
  variant?: TTypographyVariant;
  typographyStyle?: TStyledComponentsProps;
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
};

interface TAnchor extends Omit<Partial<HTMLAnchorElement>, 'children'> {
  tag: Extract<ElementType, 'a'>;
}

export type TTypography = (TAnchor | { tag?: Exclude<ElementType, 'a'> }) & TBaseTypography;
