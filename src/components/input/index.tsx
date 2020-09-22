import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...restOfprops }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (inputRef.current?.value) {
      setIsFilled(true);
    }
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        {...restOfprops}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
