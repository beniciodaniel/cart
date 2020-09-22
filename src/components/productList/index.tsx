import React from 'react';

import { MdChatBubbleOutline, MdDelete } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

import {
  ProductListContainer,
  ProductContainer,
  DescriptionContainer,
  InputContainer,
  IncrementDecrementContainer,
  SubtotalContainer,
} from './styles';

const ProductList: React.FC = () => {
  const {
    products,
    incrementProductQuantity,
    decrementProductQuantity,
    removeProduct,
    addNote,
  } = useCart();

  console.log(products?.length, 'produtos!');

  return (
    <ProductListContainer>
      {products?.map(product => (
        <ProductContainer key={product.id}>
          <img src={product.url_imagem} alt="Produto" />

          <DescriptionContainer>
            <p>{product.nome}</p>
            <p>SKU {product.sku}</p>
            <InputContainer>
              <MdChatBubbleOutline size={20} />
              <input
                type="text"
                placeholder="Adicionar observação"
                value={product.observacao ? product.observacao : ''}
                onChange={event => addNote(product.id, event.target.value)}
              />
            </InputContainer>
          </DescriptionContainer>

          <IncrementDecrementContainer>
            <div>
              <button
                type="button"
                onClick={() => decrementProductQuantity(product.id)}
              >
                <FiMinus color="#9e9e9e" size={20} />
              </button>
              <span>{product.quantidade}</span>
              <button
                type="button"
                onClick={() => incrementProductQuantity(product.id)}
              >
                <FiPlus color="#e53935" size={20} />
              </button>
            </div>
          </IncrementDecrementContainer>

          <SubtotalContainer>
            <p>R$ {product.valor_unitario * product.quantidade}</p>
            <button type="button" onClick={() => removeProduct(product.id)}>
              <MdDelete size={20} />
            </button>
          </SubtotalContainer>
        </ProductContainer>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
