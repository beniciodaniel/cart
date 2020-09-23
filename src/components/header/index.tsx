import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  MdPerson,
  MdLocationOn,
  MdMenu,
  MdShoppingCart,
  MdSearch,
} from 'react-icons/md';
import logoImage from '../../assets/logo.png';
import formatValue from '../../utils/formatValue';

import { useCart } from '../../context/CartContext';

import {
  Header as HeaderContainer,
  LoginHeader,
  Logo,
  NavContainer,
  NavSpan,
  NavLink,
  FormContainer,
  Container,
} from './styles';

const Header: React.FC = () => {
  const { total } = useCart();

  return (
    <HeaderContainer>
      <Container>
        <LoginHeader>
          <span>
            <FaWhatsapp size={20} /> (47) 9999-9999
          </span>
          <div>
            <span>
              <MdPerson size={20} /> Arethusa
            </span>
            <span>
              <MdLocationOn size={20} /> Bom Retiro - Joinville, SC
            </span>
          </div>
        </LoginHeader>

        <Logo>
          <img src={logoImage} alt="Logo Sua Marca" />
        </Logo>

        <NavContainer>
          <NavSpan>
            <NavLink hasIcon to="/setores">
              <MdMenu size={24} /> SETORES
            </NavLink>
            <NavLink to="/ofertas">OFERTAS</NavLink>
          </NavSpan>

          <FormContainer>
            <input type="text" placeholder="O que você procura?" />
            <button>
              <MdSearch />
            </button>
          </FormContainer>

          <NavLink hasIcon to="/">
            <MdShoppingCart color="#e53935" /> {formatValue(total)}
          </NavLink>
        </NavContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
