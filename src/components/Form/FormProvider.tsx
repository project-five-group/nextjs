import { Form, FormikProvider } from 'formik';

import { combineClassNames } from 'lib';

import { IFormProvider, TFormValues } from './types';

export const FormProvider = <Values extends TFormValues = TFormValues>({
  children,
  className,
  ...ctx
}: IFormProvider<Values>) => {
  return (
    <FormikProvider value={ctx}>
      <Form className={combineClassNames(className, 'red-project-form')}>{children}</Form>
    </FormikProvider>
  );
};
