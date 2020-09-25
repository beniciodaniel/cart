import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface NavSpanProps {
  hasIcon?: boolean;
}

export const Header = styled.header`
  position: fixed;
  width: 100vw;

  top: 0;
  z-index: 99;
  height: 160px;
  background: #fff;

  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 932px) {
    height: 250px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;

  height: 100%;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const LoginHeader = styled.div`
  padding: 20px 0 15px;
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

  @media screen and (max-width: 932px) {
    padding: 20px 20px 15px 20px;
  }
`;

export const Logo = styled.div`
  height: 55px;
  padding: 10px 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  height: 50px;
  padding: 10px 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 932px) {
    flex-direction: column;

    form {
      margin: 10px 0 10px 0;
    }
  }
`;

export const NavSpan = styled.span`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 32px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0.1px;
  color: #212121;
`;

export const NavLinkSpan = styled.span<NavSpanProps>`
  font-size: 14px;
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
        height: 24px;
        width: 24px;
      }
    `}
`;

export const FormContainer = styled.form`
  display: flex;
  max-width: 600px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #212121;

  input {
    width: 400px;
    line-height: 20px;
    font-size: 14px;
    border: 0;
    font-weight: 500;
    letter-spacing: 0.1px;

    &::placeholder {
      color: #bdbdbd;
    }
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
