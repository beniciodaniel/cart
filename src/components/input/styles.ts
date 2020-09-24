import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  border-radius: 10px;
  padding: 16px;

  border: 2px solid #e0e0e0;

  position: relative;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #616161;

    &::placeholder {
      color: #bdbdbd;
    }
  }

  label {
    z-index: -99;
    font-size: 0.8rem;
    color: #bdbdbd;
    position: absolute;
    top: 17px;
    left: 16px;
    transition: 300ms ease all;
  }

  span {
    position: absolute;
    bottom: 5px;
    right: 5px;

    font-size: 10px;
    color: #e53935;
  }

  ${props =>
    props.isErrored &&
    css`
      border: 2px solid #e53935;
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #35e539;

      label {
        top: -20px;
        font-size: 0.8rem;
      }
    `}

    ${props =>
    props.isFocused &&
    css`
      border: 2px solid #35e539;

      label {
        top: -20px;
        font-size: 0.8rem;
      }
    `}
`;
