import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* max-width: 1200px; */
`;

export const Container = styled.div`
  width: 1200px;
  height: 100px;

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
`;

export const CartContainer = styled.div`
  display: flex;
`;
