import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import { MdPerson, MdLocationOn } from 'react-icons/md';
import { PageContainer, Header, LoginHeader } from './styles';

const Cart: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <LoginHeader>
          <span>
            <FaWhatsapp size={20} /> 9999-9999
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
      </Header>
    </PageContainer>
  );
};

export default Cart;
