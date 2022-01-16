import { IInput } from 'components';

import { IFormField, TFormValues } from '../../types';

export interface IInputField<Form extends TFormValues = TFormValues, Value = any>
  extends Omit<IInput, 'value' | 'onChange' | 'onBlur' | 'onFocus' | 'name'>,
    IFormField {}
