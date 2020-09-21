import React from 'react';

import Header from '../../components/header';
import Banner from '../../components/banner';

import ProductList from '../../components/productList';
import Total from '../../components/total';

import { PageContainer, Container, CartContainer } from './styles';

const Cart: React.FC = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <Banner />
        <Container>
          <h1>Carrinho</h1>

          <CartContainer>
            <ProductList />
            <Total />
          </CartContainer>
        </Container>
      </PageContainer>
    </>
  );
};

export default Cart;
