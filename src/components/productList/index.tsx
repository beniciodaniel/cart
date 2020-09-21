import React from 'react';

import { MdChatBubbleOutline, MdDelete } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';

import {
  ProductListContainer,
  ProductContainer,
  DescriptionContainer,
  InputContainer,
  IncrementDecrementContainer,
  SubtotalContainer,
} from './styles';

const ProductList: React.FC = () => {
  return (
    <ProductListContainer>
      <ProductContainer>
        <img
          src="https://simplest-meuspedidos-arquivos.s3.amazonaws.com/media/imagens_auto/alimentos/arroz_pacote.jpg"
          alt="Produto"
        />

        <DescriptionContainer>
          <p>Nome de Produto XPTO Qualquer - Marca Tanto Faz</p>
          <p>SKU 123456789</p>
          <InputContainer>
            <MdChatBubbleOutline size={20} />
            <input type="text" placeholder="Adicionar observação" />
          </InputContainer>
        </DescriptionContainer>

        <IncrementDecrementContainer>
          <div>
            <button>
              <FiMinus color="#9e9e9e" size={20} />
            </button>
            <span>2</span>
            <button>
              <FiPlus color="#e53935" size={20} />
            </button>
          </div>
        </IncrementDecrementContainer>

        <SubtotalContainer>
          <p>R$ 12,50</p>
          <button>
            <MdDelete size={20} />
          </button>
        </SubtotalContainer>
      </ProductContainer>
    </ProductListContainer>
  );
};

export default ProductList;
