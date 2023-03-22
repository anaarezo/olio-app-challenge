import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {convertDateToDistance, convertStringUTCToDate} from '../../utils';

import * as S from './styles';

interface IProductContent {
  current_avatar: string;
  rating: number | null;
  first_name: string;
  title: string;
  created_at: string;
  roles: string[];
}

const ProductContent = (props: IProductContent) => {
  const {current_avatar, rating, first_name, title, created_at, roles} = props;
  return (
    <S.Content>
      <S.UserInfo>
        <S.UserAvatar source={{uri: current_avatar}} />
        {!rating ? null : (
          <S.RatingInfo testID="ratingInfo">
            <Icon name="star" size={10} color="#ffffff" />
            <S.Rating>{(rating / 2).toFixed(1)}</S.Rating>
          </S.RatingInfo>
        )}
      </S.UserInfo>

      <S.ProductInfo>
        <S.UserName>{`${first_name} is giving away`}</S.UserName>
        <S.Title>{title}</S.Title>
        <S.AddedDate>
          <Icon name="clock-o" size={14} color="#444444" />
          <S.Time>{`Added ${convertDateToDistance(
            convertStringUTCToDate(created_at),
          )} `}</S.Time>

          {roles.includes('Volunteer') ? (
            <S.Role>{'• Volunteer'}</S.Role>
          ) : null}
        </S.AddedDate>
      </S.ProductInfo>
    </S.Content>
  );
};

export default ProductContent;
