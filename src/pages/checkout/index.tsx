import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Header from '../../components/header';
import Banner from '../../components/banner';

import Input from '../../components/input';
import Button from '../../components/button';

import { PageContainer, Container } from './styles';

interface FormData {
  enderecoRua: string;
  enderecoNumero: number;
  enderecoBairro: string;
  cartaoNumero: number;
  cartaoCVC: number;
}

const Checkout: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((formData: FormData) => {
    console.log(formData);
  }, []);

  return (
    <PageContainer>
      <Header />
      <Banner />
      <Container>
        <h1>Finalizar Compra</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="enderecoRua" placeholder="Digite o seu endereço" />
          <div>
            <Input name="enderecoNumero" placeholder="Número" />
            <Input name="enderecoBairro" placeholder="Bairro" />
          </div>
          <span>
            <Input
              name="cartaoNumero"
              placeholder="Digite os números do seu cartão"
            />
            <Input name="cartaoCVC" placeholder="CVC" />
          </span>
          <Button type="submit">Finalizar</Button>
        </Form>
      </Container>
    </PageContainer>
  );
};

export default Checkout;
