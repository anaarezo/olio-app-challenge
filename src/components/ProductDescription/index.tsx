import React from 'react-native';

import * as S from './styles';

interface IProductDescription {
  description: string;
  section: string;
  collection_notes: string;
}

const ProductContent = (props: IProductDescription) => {
  return (
    <S.Description>
      <S.ProductDescription>{props.description}</S.ProductDescription>
      {props.section === 'food' ? (
        <S.MoreInfo>{'View food allergen information'}</S.MoreInfo>
      ) : null}

      <S.PickupTitle>{'Pick-up times'}</S.PickupTitle>
      <S.PickupDescription>{props.collection_notes}</S.PickupDescription>
    </S.Description>
  );
};

export default ProductContent;
