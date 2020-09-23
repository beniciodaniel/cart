import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/header';
import Banner from '../../components/banner';

import Input from '../../components/input';
import Button from '../../components/button';

import { PageContainer, ContentContainer, Container } from './styles';

interface FormData {
  enderecoRua: string;
  enderecoNumero: number;
  enderecoBairro: string;
  cartaoNumero: number;
  cartaoCVC: number;
}

const Checkout: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (formData: FormData) => {
    console.log(formData);

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        enderecoRua: Yup.string().required('Endereço obrigatório'),
        enderecoNumero: Yup.string().required('Número obrigatório'),
        enderecoBairro: Yup.string().required('Bairro obrigatório'),
        cartaoNumero: Yup.number()
          .typeError('Somente números')
          .required('Números obrigatórios')
          .positive('Devem ser números positivos')
          .integer('Números inteiros'),
        cartaoCVC: Yup.number()
          .typeError('Somente números')
          .required('Números obrigatórios')
          .positive('Devem ser números positivos')
          .integer('Números inteiros'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        // console.log(errors);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
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
      </ContentContainer>
    </PageContainer>
  );
};

export default Checkout;
