import React from 'react';

import Header from '../../components/header';
import Banner from '../../components/banner';

import { ContentContainer, PageContainer } from './styles';

const Cart: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <Banner />
        <ContentContainer>
          <h1>Carrinho</h1>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Cart;
