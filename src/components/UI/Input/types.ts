import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Значение которое передается в Input
   */
  value: string | number;
  /**
   * Название для Input
   */
  label: string;
}
