import React from 'react';

import {
  TotalContainer,
  DiscountContainer,
  ShowTotalContainer,
  CheckoutContainer,
} from './styles';

const Total: React.FC = () => {
  return (
    <TotalContainer>
      <div>
        <strong>RESUMO DO PEDIDO</strong>
      </div>

      <DiscountContainer>
        <span>
          <p>Itens</p>
          <p>5</p>
        </span>
        <span>
          <p>Total em produtos</p>
          <p>R$ 62,50</p>
        </span>
        <span>
          <p>Descontos</p>
          <p>R$ 0,00</p>
        </span>
      </DiscountContainer>

      <ShowTotalContainer>
        <strong>Total</strong>
        <strong>R$ 62,50</strong>
      </ShowTotalContainer>

      <CheckoutContainer>
        <button>Finalizar a compra</button>
      </CheckoutContainer>
    </TotalContainer>
  );
};

export default Total;
