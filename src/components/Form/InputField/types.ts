import { IInput } from 'components/UI';

import { IFormField, TFormValues } from '../hooks';

export interface IInputField<Form extends TFormValues = TFormValues, Value = any>
  extends Omit<IInput, 'value' | 'onChange' | 'onBlur' | 'onFocus' | 'name'>,
    IFormField {}
