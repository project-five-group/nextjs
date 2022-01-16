import { ChangeEvent, useCallback, useState } from 'react';
import { FieldHelperProps, FieldInputProps, FieldMetaProps, FieldValidator, FormikHandlers, useField } from 'formik';
import { O, Union } from 'ts-toolbelt';

import { useUpdateEffect } from 'lib';

export type TFormValues = Record<string, unknown>;

export interface IFormField<Form extends TFormValues = TFormValues, Value = any> {
  validate?: FieldValidator;
  name: O.Keys<Form>;
  onAfterChange?: (value: Union.Nullable<Value | ChangeEvent>) => void;
}

export const useFormField = <Form extends TFormValues = TFormValues, Value = any>({
  onAfterChange,
  ...fieldProps
}: IFormField<Form, Value>): [FieldInputProps<Value>, FieldMetaProps<Value>, FieldHelperProps<Value>] => {
  const [event, setEvent] = useState<Value | ChangeEvent>();
  const [field, ...rest] = useField(fieldProps);

  const onChange = useCallback<FormikHandlers['handleChange']>(
    (changeEvent: ChangeEvent | Value) => {
      field.onChange(changeEvent);
      setEvent(changeEvent);
    },
    [field]
  );

  useUpdateEffect(() => {
    onAfterChange?.(event);
  }, [event]);

  return [{ ...field, onChange }, ...rest];
};
