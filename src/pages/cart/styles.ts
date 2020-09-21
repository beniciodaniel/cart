import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 1440px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const LoginHeader = styled.div`
  margin: 20px 0 15px;
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  line-height: 20px;

  svg {
    margin-right: 6px;
  }

  > span {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;

    > span {
      display: flex;
      align-items: center;
    }

    span + span {
      margin-left: 32px;
    }
  }
`;

export const Logo = styled.div`
  height: 55px;
  margin: 10px 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
