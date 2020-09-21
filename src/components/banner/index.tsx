import React from 'react';

import { MdCreditCard, MdLocalOffer, MdLocalShipping } from 'react-icons/md';

import { BannerContainer, BannerItemsContainer, BannerItem } from './styles';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerItemsContainer>
        <BannerItem>
          <MdLocalShipping /> Delivery apenas para Joinville
        </BannerItem>
        <BannerItem>
          <MdLocalOffer />
          Desconto de 10% nas compras acima de R$ 200, 00
        </BannerItem>
        <BannerItem>
          <MdCreditCard />
          Pague em até 12x no cartão
        </BannerItem>
      </BannerItemsContainer>
    </BannerContainer>
  );
};

export default Banner;
