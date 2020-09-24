import styled from 'styled-components';

export const SpinningContainer = styled.div`
  margin: auto auto;

  div {
    width: 50px;
    height: 50px;
    border: 2px solid #e53935;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    -webkit-animation: react-infinite-spinner linear 1.2s infinite;
    -moz-animation: react-infinite-spinner linear 1.2s infinite;
    -o-animation: react-infinite-spinner linear 1.2s infinite;
    animation: react-infinite-spinner linear 1.2s infinite;
  }

  @keyframes react-infinite-spinner {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes react-infinite-spinner {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-moz-keyframes react-infinite-spinner {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
