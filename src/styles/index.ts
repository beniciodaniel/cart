import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    width: 100%;
    height: 100%;
    background: #fff;
    color: #212121;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }

  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
