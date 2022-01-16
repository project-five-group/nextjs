import { InputHTMLAttributes } from 'react';

export interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Значение для инпута
   */
  value?: string | number;
}
