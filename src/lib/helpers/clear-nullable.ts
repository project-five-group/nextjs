import { isNil, pick } from 'ramda';
import { O, Union } from 'ts-toolbelt';

export const clearNullable = <NullableObject extends Record<string, any> = Record<string, any>>(
  object: Union.Nullable<NullableObject>
) => {
  const safeObj = object ?? ({} as NullableObject);

  return pick(Object.keys(safeObj).filter(key => !isNil(key)) as O.NonNullableKeys<NullableObject>[], safeObj);
};
