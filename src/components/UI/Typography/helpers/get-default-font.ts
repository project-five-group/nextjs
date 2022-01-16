import { TTypographyFont, TTypographyVariant } from '../types';

const primaryVariants: TTypographyVariant[] = ['paragraph', 'comment', 'link'];

export const getDefaultFont = (variant: TTypographyVariant): TTypographyFont =>
  primaryVariants.includes(variant) ? 'primary' : 'secondary';
