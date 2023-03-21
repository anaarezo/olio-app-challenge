import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {convertDateToDistance, convertStringUTCToDate} from '../../utils';

import * as S from './styles';

interface IProductContent {
  current_avatar: string;
  rating: number;
  first_name: string;
  title: string;
  created_at: string;
  roles: string[];
}

const ProductContent = (props: IProductContent) => {
  return (
    <S.Content>
      <S.UserInfo>
        <S.UserAvatar source={{uri: props.current_avatar}} />
        {!props.rating ? null : (
          <S.RatingInfo>
            <Icon name="star" size={10} color="#ffffff" />
            <S.Rating>{(props.rating / 2).toFixed(1)}</S.Rating>
          </S.RatingInfo>
        )}
      </S.UserInfo>

      <S.ProductInfo>
        <S.UserName>{`${props.first_name} is giving away`}</S.UserName>
        <S.Title>{props.title}</S.Title>
        <S.AddedDate>
          <Icon name="clock-o" size={14} color="#444444" />
          <S.Time>{`Added ${convertDateToDistance(
            convertStringUTCToDate(props.created_at),
          )} `}</S.Time>

          {props.roles.includes('Volunteer') ? (
            <S.Role>{'• Volunteer'}</S.Role>
          ) : null}
        </S.AddedDate>
      </S.ProductInfo>
    </S.Content>
  );
};

export default ProductContent;
