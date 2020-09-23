import React from 'react';

import { useHistory } from 'react-router-dom';
import formatValue from '../../utils/formatValue';
import { useCart } from '../../context/CartContext';

import {
  TotalContainer,
  DiscountContainer,
  ShowTotalContainer,
  CheckoutContainer,
} from './styles';

const Total: React.FC = () => {
  const { total, products } = useCart();
  const history = useHistory();

  function pushToCheckoutPage() {
    history.push('/checkout');
  }

  return (
    <TotalContainer>
      <div>
        <strong>RESUMO DO PEDIDO</strong>
      </div>

      <DiscountContainer>
        <span>
          <p>Itens</p>
          <p>{products?.length}</p>
        </span>
        <span>
          <p>Total em produtos</p>
          <p>{formatValue(total)}</p>
        </span>
        <span>
          <p>Descontos</p>
          <p>R$ 0,00</p>
        </span>
      </DiscountContainer>

      <ShowTotalContainer>
        <strong>Total</strong>
        <strong>{formatValue(total)}</strong>
      </ShowTotalContainer>

      <CheckoutContainer>
        <button onClick={pushToCheckoutPage}>Finalizar a compra</button>
      </CheckoutContainer>
    </TotalContainer>
  );
};

export default Total;
