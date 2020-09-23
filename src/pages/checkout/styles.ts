import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* max-width: 1200px; */
`;

export const ContentContainer = styled.div`
  margin-top: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;

  padding: 30px 50px 40px 50px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1.5px;

    margin-bottom: 30px;
  }

  form {
    min-width: 350px;

    > div + div {
      margin-top: 15px;
    }

    div {
      display: flex;

      div:first-child {
        width: 33%;
        margin-right: 6px;
      }
    }

    span {
      margin-top: 15px;
      display: flex;

      div:first-child {
        width: 67%;
        margin-right: 6px;
      }

      div:last-child {
        width: 33%;
      }
    }
  }
`;
