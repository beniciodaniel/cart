import styled, { css } from 'styled-components';

interface NavLinkProps {
  hasIcon?: boolean;
}

export const Header = styled.header`
  width: 1200px;
  display: flex;
  flex-direction: column;
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
