import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  border-radius: 10px;
  padding: 16px;

  border: 2px solid #e0e0e0;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #616161;

    &::placeholder {
      color: #bdbdbd;
    }
  }

  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #35e539;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #35e539;
    `}
`;
