import React from 'react';

import Header from '../../components/header';
import Banner from '../../components/banner';

import ProductList from '../../components/productList';
import Total from '../../components/total';

import { useCart } from '../../context/CartContext';
import Spinner from '../../components/spinningLogo';

import {
  PageContainer,
  Container,
  CartContainer,
  ContentContainer,
} from './styles';

const Cart: React.FC = () => {
  const { isLoading } = useCart();

  return (
    <>
      <PageContainer>
        <Header />

        {isLoading ? (
          <Spinner />
        ) : (
          <ContentContainer>
            <Banner />
            <Container>
              <h1>Carrinho</h1>

              <CartContainer>
                <ProductList />
                <Total />
              </CartContainer>
            </Container>
          </ContentContainer>
        )}
      </PageContainer>
    </>
  );
};

export default Cart;
