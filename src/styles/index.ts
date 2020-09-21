import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #212121;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
  }

  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
