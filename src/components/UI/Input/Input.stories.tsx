import { ChangeEventHandler, useState } from 'react';

import { Input } from './Input';
import { IInput } from './types';

export default {
  title: 'ui/Input',
  component: Input,
};

export const Default = (args: IInput) => {
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    args.onChange?.(event);
    setValue(event.target.value);
  };

  return <Input {...{ ...args, value, onChange }} />;
};

Default.argTypes = { placeholder: { defaultValue: 'Текстовый ввод' } };
