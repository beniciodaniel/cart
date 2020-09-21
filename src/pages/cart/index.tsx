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
import {
  PageContainer,
  Header,
  LoginHeader,
  Logo,
  NavContainer,
  NavSpan,
  NavLink,
  FormContainer,
} from './styles';

const Cart: React.FC = () => {
  return (
    <PageContainer>
      <Header>
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
            <NavLink hasIcon href="/setores">
              <MdMenu size={24} /> SETORES
            </NavLink>
            <NavLink href="/ofertas">OFERTAS</NavLink>
          </NavSpan>

          <FormContainer>
            <input type="text" placeholder="O que você procura?" />
            <button>
              <MdSearch />
            </button>
          </FormContainer>

          <NavLink hasIcon href="/checkout">
            <MdShoppingCart color="#e53935" /> R$ 6666
          </NavLink>
        </NavContainer>
      </Header>
    </PageContainer>
  );
};

export default Cart;
