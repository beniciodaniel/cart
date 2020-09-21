import styled, { css } from 'styled-components';

interface NavLinkProps {
  hasIcon?: boolean;
}

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

export const NavContainer = styled.div`
  height: 50px;
  margin: 10px 0 10px;

  display: flex;
  align-items: center;
`;

export const NavSpan = styled.span`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 32px;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0.1px;
  color: #212121;

  ${props =>
    props.hasIcon &&
    css`
      display: flex;
      align-items: center;

      svg {
        margin-right: 6px;
      }
    `}
`;

export const SearchContainer = styled.form``;
