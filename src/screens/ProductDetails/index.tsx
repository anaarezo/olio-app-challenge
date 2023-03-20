import React, {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Alert,
  Share,
} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import {convertDateToDistance, convertStringUTCToDate} from '../../utils';
import {IProduct} from '../../store/articles/interface';
import * as S from './styles';

interface IProductDetails {
  route: {
    params: {
      product: IProduct;
    };
  };
}

const DIMENSION_DELTA = 0.002;

const ProductDetailsScreen = ({route}: IProductDetails) => {
  const product = route.params.product;
  const {width} = Dimensions.get('screen');

  const onShare = async () => {
    try {
      await Share.share({
        message: `${product.title} is available at Olio for free!!!`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <S.Container>
          <S.ProductPicture source={{uri: product?.images[0].files.medium}} />

          <S.InfoBar>
            <S.Brand>{'From Olio'}</S.Brand>
            <S.BarContent>
              <S.ShareBox onPress={onShare}>
                <Icon name="share-square-o" size={18} color="#444444" />
                <S.Share>{'Share'}</S.Share>
              </S.ShareBox>
              <S.LikeBox>
                <Icon name="heart-o" size={18} color="#444444" />
                <S.Likes>{`${product.reactions.likes} likes`}</S.Likes>
              </S.LikeBox>
            </S.BarContent>
          </S.InfoBar>

          <S.Content>
            <S.UserInfo>
              <S.UserAvatar
                source={{uri: product?.user.current_avatar.small}}
              />
              {!product.user.rating.rating ? null : (
                <S.RatingInfo>
                  <Icon name="star" size={10} color="#ffffff" />
                  <S.Rating>
                    {(product.user.rating?.rating / 2).toFixed(1)}
                  </S.Rating>
                </S.RatingInfo>
              )}
            </S.UserInfo>

            <S.ProductInfo>
              <S.UserName>{`${product.user.first_name} is giving away`}</S.UserName>
              <S.Title>{product.title}</S.Title>
              <S.AddedDate>
                <Icon name="clock-o" size={14} color="#444444" />
                <S.Time>{`Added ${convertDateToDistance(
                  convertStringUTCToDate(product.created_at),
                )} `}</S.Time>

                {product.user.roles.includes('Volunteer') ? (
                  <S.Role>{'• Volunteer'}</S.Role>
                ) : null}
              </S.AddedDate>
            </S.ProductInfo>
          </S.Content>

          <S.Description>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            {product.section === 'food' ? (
              <S.MoreInfo>{'View food allergen information'}</S.MoreInfo>
            ) : null}

            <S.PickupTitle>{'Pick-up times'}</S.PickupTitle>
            <S.PickupDescription>
              {product.collection_notes}
            </S.PickupDescription>
          </S.Description>

          <S.Disclaimer>
            {
              'Everything in this section is givem away for free 💚. Strictly no selling, no swaps, no donations'
            }
          </S.Disclaimer>

          <S.Place>
            <S.Aprox>{'Approx. Location'}</S.Aprox>
            <S.AproxDistance>
              <Icon name="map-marker" size={13} color="#757576" />
              {` ${product.location.distance}mi away`}
            </S.AproxDistance>
          </S.Place>
          <S.LocationMap>
            <MapView
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: width,
                height: 270,
              }}
              initialRegion={{
                latitude: product.location.latitude,
                longitude: product.location.longitude,
                latitudeDelta: DIMENSION_DELTA,
                longitudeDelta: DIMENSION_DELTA,
              }}>
              <Circle
                center={{
                  latitude: product.location.latitude,
                  longitude: product.location.longitude,
                }}
                radius={20}
                strokeColor={'#bb4291'}
                fillColor={'rgba(187,66,145,0.05)'}
              />
            </MapView>
          </S.LocationMap>
        </S.Container>
      </ScrollView>

      <S.ContainerButton>
        <S.RequestButton>
          <S.RequestLabel>{'Request this'}</S.RequestLabel>
          <S.RequestLocation>
            <Icon name="map-marker" size={13} color="#ff94e2" />
            {` ${product.location.distance}mi away`}
          </S.RequestLocation>
        </S.RequestButton>
      </S.ContainerButton>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
