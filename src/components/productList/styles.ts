import styled from 'styled-components';

export const ProductListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 115px;
  padding: 10px 10px 15px 10px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #e0e0e0;

  img {
    height: 90px;
    width: 90px;
    margin-right: 40px;
  }

  &:hover {
    background: #f5f5f5;
  }
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  margin-right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    margin-right: 4px;
  }

  input {
    width: 100%;
    border: 0;
    font-size: 12px;
    background: transparent;
    font-style: italic;

    &::placeholder {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      font-style: normal;
      color: #e53935;
    }
  }
`;

export const IncrementDecrementContainer = styled.div`
  width: 150px;
  margin-right: 20px;
  font-weight: 500;
  line-height: 20px;

  div {
    height: 30px;
    background: #fff;

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
  width: 150px;
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
