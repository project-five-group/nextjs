import { ReactElement, Ref, forwardRef } from 'react';

import { Input } from 'components';

import { TFormValues } from '../../types';
import { useFormField } from '../../hooks';

import { IInputField } from './types';

type TInputField = <Form extends TFormValues = TFormValues, Value = any>(
  p: IInputField<Form, Value> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

const FormInput = forwardRef<HTMLInputElement, IInputField>(
  <Form extends TFormValues = TFormValues, Value = any>(
    { validate, name, onAfterChange, ...rest }: IInputField<Form, Value>,
    ref: Ref<HTMLInputElement>
  ) => {
    const [{ value = '', onChange, onBlur }] = useFormField({ validate, name, onAfterChange });

    return <Input {...{ ref, name, value, onChange, onBlur, ...rest }} />;
  }
);

FormInput.displayName = 'InputField';

export const InputField = FormInput as TInputField;
