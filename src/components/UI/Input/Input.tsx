import { FocusEvent, forwardRef, useState } from 'react';

import { useForkForwardedRef } from 'lib';

import { IInput } from './types';
import { StyledInput, StyledInputBox, StyledInputContent, StyledLabel } from './styled';

export const Input = forwardRef<HTMLInputElement, IInput>(({ placeholder, onFocus, onBlur, value, ...rest }, ref) => {
  const [setRef, forkedRef] = useForkForwardedRef(ref);
  const [isFocused, setFocused] = useState(false);

  const hasFocus = Boolean(value || isFocused);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onFocus?.(event);
  };

  return (
    <StyledInputBox onClick={() => forkedRef.current?.focus()}>
      <StyledInputContent {...{ isFocused }}>
        {placeholder && <StyledLabel isFocused={hasFocus}>{placeholder}</StyledLabel>}
        <StyledInput ref={setRef} onFocus={handleFocus} onBlur={handleBlur} {...{ ...rest, value }} />
      </StyledInputContent>
    </StyledInputBox>
  );
});

Input.displayName = 'Input';
