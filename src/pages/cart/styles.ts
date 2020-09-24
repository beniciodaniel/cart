import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  margin-top: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: auto;
  margin-bottom: 80px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 0 40px 0;

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
`;

export const CartContainer = styled.div`
  display: flex;
  width: 1200px;
  padding: 0 50px 0 50px;

  > div:first-child {
    width: 100%;
    margin-right: 70px;
    overflow-y: auto;
  }
`;
