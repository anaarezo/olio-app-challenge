import React, {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {convertDateToDistance, convertStringUTCToDate} from '../../utils';

import * as S from './styles';

interface IProductCard {
  product_photo: string;
  title: string;
  first_name: string;
  current_avatar: string;
  rating: number;
  distance: number;
  id: number;
  views: number;
  created_at: string;
  visitedArticles: any;
}

const ProductCard = (props: IProductCard) => {
  const {
    product_photo,
    title,
    first_name,
    current_avatar,
    rating,
    distance,
    id,
    views,
    created_at,
    visitedArticles,
  } = props;
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        shadowColor: '#666666',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      <S.Card>
        <S.ProductPhoto source={{uri: product_photo}} />
        <S.Details>
          <S.Title numberOfLines={1} ellipsizeMode="tail">
            {title}
          </S.Title>
          <S.UserInfo>
            <S.UserAvatar source={{uri: current_avatar}} />
            <S.UserName>{first_name}</S.UserName>
            <S.RatingInfo>
              <S.Rating>
                {!rating ? (
                  '🐣'
                ) : (
                  <>
                    <Icon name="star" size={13} color="#ffb300" />
                    {(rating / 2).toFixed(1)}
                  </>
                )}
              </S.Rating>
            </S.RatingInfo>
          </S.UserInfo>
          <S.ProductInfo>
            <S.LocationInfo>
              <Icon name="map-marker" size={15} color="#666666" />
              <S.Distance>{`${distance}mi`}</S.Distance>
            </S.LocationInfo>
            <S.ViewersInfo>
              <Icon
                name="eye"
                size={15}
                color={visitedArticles.includes(id) ? '#666666' : '#66bb66'}
              />
              <S.Viewed>{views}</S.Viewed>
            </S.ViewersInfo>
            <S.DateInfo>
              <S.AddedDate>
                {`${convertDateToDistance(convertStringUTCToDate(created_at))}`}
              </S.AddedDate>
            </S.DateInfo>
          </S.ProductInfo>
        </S.Details>
      </S.Card>
    </View>
  );
};

export default ProductCard;
