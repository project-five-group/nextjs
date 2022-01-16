import { FormikConfig, useFormik } from 'formik';
import { O, Union } from 'ts-toolbelt';

import { clearNullable } from 'lib';

import { TFormValues, TUseForm } from '../types';

interface IFormikConfig<Values extends TFormValues = TFormValues> extends Omit<FormikConfig<Values>, 'initialValues'> {
  initialValues?: Partial<O.Nullable<Values>>;
}

const INITIAL_PROPS: FormikConfig<TFormValues> = {
  initialValues: {},
  onSubmit: () => {},
};

export const useForm = <Values extends TFormValues = TFormValues>(
  formikProps: Union.Nullable<O.Partial<IFormikConfig<Values>>> = null
): TUseForm<Values> => {
  return useFormik<Values>({ ...INITIAL_PROPS, ...clearNullable(formikProps) } as FormikConfig<Values>);
};
