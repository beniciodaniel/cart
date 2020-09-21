import styled from 'styled-components';

export const TotalContainer = styled.div`
  border: 1px solid #e0e0e0;
  width: 320px;

  > div:first-child {
    height: 50px;
    padding: 10px 20px;
    line-height: 25px;
    letter-spacing: 0.1px;

    border-bottom: 1px solid #e0e0e0;

    display: flex;
    align-items: center;

    strong {
      font-weight: 700;
    }
  }
`;

export const DiscountContainer = styled.div`
  line-height: 20px;
  padding: 20px;
  height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    display: flex;
    justify-content: space-between;

    p:first-child {
      color: #616161;
    }

    p + p {
      font-weight: 500;
    }
  }
`;

export const ShowTotalContainer = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 90px;
  padding: 20px;

  button {
    width: 100%;
    height: 100%;
    background: #e53935;
    border: 0;
    font-size: 16px;
    color: #fff;
  }
`;
