import { ChangeEvent, useCallback, useState } from 'react';
import { FieldHelperProps, FieldInputProps, FieldMetaProps, FormikHandlers, useField } from 'formik';

import { useUpdateEffect } from 'lib';

import { IFormField, TFormValues } from '../types';

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
