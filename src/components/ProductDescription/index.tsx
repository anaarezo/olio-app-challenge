import React from 'react-native';

import * as S from './styles';

interface IProductDescription {
  description: string;
  section: string;
  collection_notes: string;
}

const ProductContent = (props: IProductDescription) => {
  const {description, section, collection_notes} = props;
  return (
    <S.Description>
      <S.ProductDescription>{description}</S.ProductDescription>
      {section === 'food' ? (
        <S.MoreInfo>{'View food allergen information'}</S.MoreInfo>
      ) : null}

      <S.PickupTitle>{'Pick-up times'}</S.PickupTitle>
      <S.PickupDescription>{collection_notes}</S.PickupDescription>
    </S.Description>
  );
};

export default ProductContent;
