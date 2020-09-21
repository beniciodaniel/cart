import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  height: 115px;
  padding: 10px 10px 15px 10px;

  display: flex;

  border-bottom: 1px solid #e0e0e0;

  img {
    height: 90px;
    width: 90px;
    margin-right: 40px;
  }
`;

export const DescriptionContainer = styled.div`
  max-width: 280px;
  margin-right: 20px;

  p:first-child {
    font-size: 14px;
    line-height: 20px;
  }

  p + p {
    font-size: 12px;
    color: #9e9e9e;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #e53935;
  }

  input {
    border: 0;
    font-size: 12px;

    &::placeholder {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #e53935;
    }
  }
`;

export const IncrementDecrementContainer = styled.div`
  width: 120px;
  margin-right: 20px;
  font-weight: 500;
  line-height: 20px;

  div {
    height: 30px;

    border: solid 1px #bdbdbd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      border: 0;
      background: transparent;
    }
  }
`;

export const SubtotalContainer = styled.div`
  width: 120px;
  font-weight: 500;
  line-height: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  button {
    border: 0;
    background: transparent;
  }

  svg {
    color: #e53935;
  }
`;
