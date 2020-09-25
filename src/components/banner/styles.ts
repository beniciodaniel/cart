import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 60px;
  width: 100vw;
  padding: 20px 0 20px;
  margin: 0 auto;
  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 932px) {
    /* height: 100px; */
    flex-direction: column;
  }
`;

export const BannerItem = styled.span`
  width: 400px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #616161;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 20px;
    width: 20px;
    margin-right: 6px;
  }
`;
