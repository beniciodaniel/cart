import React from 'react';

import Header from '../../components/header';
import Banner from '../../components/banner';

import { PageContainer } from './styles';

const Cart: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <Banner />
      </PageContainer>
    </>
  );
};

export default Cart;
