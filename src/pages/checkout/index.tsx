import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { useCart } from '../../context/CartContext';
import api from '../../services/api';

import Header from '../../components/header';
import Banner from '../../components/banner';
import Input from '../../components/input';
import Button from '../../components/button';
import FooterBanner from '../../components/footerBanner';

import { PageContainer, ContentContainer, Container } from './styles';

interface FormData {
  enderecoRua: string;
  enderecoNumero: number;
  enderecoBairro: string;
  cartaoNumero: number;
  cartaoCVC: number;
}

const Checkout: React.FC = () => {
  const { products } = useCart();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          enderecoRua: Yup.string().required('Endereço obrigatório'),
          enderecoNumero: Yup.number()
            .required('Números obrigatórios')
            .typeError('Somente números')
            .positive('Devem ser números positivos')
            .integer('Números inteiros'),
          enderecoBairro: Yup.string().required('Bairro obrigatório'),
          cartaoNumero: Yup.string()
            .required('Cartão obrigatório')
            .matches(/^[0-9]{16}$/, 'Deve conter 16 dígitos numéricos'),
          cartaoCVC: Yup.string()
            .required('CVC obrigatório')
            .matches(/^[0-9]/, 'Somente dígitos numéricos')
            .min(3, '3 ou 4 dígitos')
            .max(4, '3 ou 4 dígitos'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        const data = {
          itens: products?.map(product => ({
            id: product.id,
            quantidade: product.quantidade,
            observacao: product.observacao ? product.observacao : '',
          })),
          endereco: {
            rua: formData.enderecoRua,
            numero: formData.enderecoNumero,
            bairro: formData.enderecoBairro,
          },
          cartao: {
            numero: formData.cartaoNumero,
            cvc: formData.cartaoCVC,
          },
        };

        const response = await api.post('/carrinho', data);

        if (response.status === 201) {
          alert('Compra efetuada com sucesso! :)');
          history.push('/');
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [products, history],
  );

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
        <FooterBanner />
      </ContentContainer>
    </PageContainer>
  );
};

export default Checkout;
