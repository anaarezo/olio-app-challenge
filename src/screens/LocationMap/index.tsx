import React, {
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import useProductsMap from './hooks/useProductsMap';
import * as S from '../Home/styles';
import {useState} from 'react';
import {IProduct} from '../../store/articles/interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import {convertDateToDistance, convertStringUTCToDate} from '../../utils';
import {ILocation, IMaxMinCoordinates, IProductCard} from './interface';

const LocationMapScreen = ({navigation}: any) => {
  const {products: products, productsMap: productsMap} = useProductsMap();
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  if (!products || !productsMap) {
    return;
  }

  const minAndMaxLatitudeAndLongitude = (
    coordinate: IMaxMinCoordinates,
    {location}: ILocation,
  ) => {
    return {
      maxLatitude: Math.max(coordinate.maxLatitude, location.latitude),
      maxLongitude: Math.max(coordinate.maxLongitude, location.longitude),
      minLatitude: Math.min(coordinate.minLatitude, location.latitude),
      minLongitude: Math.min(coordinate.minLongitude, location.longitude),
    };
  };

  const renderProductCard = ({item}: IProductCard) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails', {product: item});
        }}>
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
            <S.ProductPhoto source={{uri: item?.images[0].files.medium}} />
            <S.Details>
              <S.Title numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </S.Title>
              <S.UserInfo>
                <S.UserAvatar source={{uri: item?.user.current_avatar.small}} />
                <S.UserName>{item.user.first_name}</S.UserName>
                <S.RatingInfo>
                  <S.Rating>
                    {!item.user.rating.rating ? (
                      '🐣'
                    ) : (
                      <>
                        <Icon name="star" size={13} color="#ffb300" />
                        {(item.user.rating.rating / 2).toFixed(1)}
                      </>
                    )}
                  </S.Rating>
                </S.RatingInfo>
              </S.UserInfo>
              <S.ProductInfo>
                <S.LocationInfo>
                  <Icon name="map-marker" size={15} color="#666666" />
                  <S.Distance>{`${item.location.distance}mi`}</S.Distance>
                </S.LocationInfo>
                <S.ViewersInfo>
                  <Icon name="eye" size={15} color="#666666" />
                  <S.Viewed>{item.reactions.views}</S.Viewed>
                </S.ViewersInfo>
                <S.DateInfo>
                  <S.AddedDate>
                    {`${convertDateToDistance(
                      convertStringUTCToDate(item.created_at),
                    )}`}
                  </S.AddedDate>
                </S.DateInfo>
              </S.ProductInfo>
            </S.Details>
          </S.Card>
        </View>
      </TouchableOpacity>
    );
  };

  const {width, height} = Dimensions.get('screen');

  const initialValues = {
    maxLatitude: -Infinity,
    maxLongitude: -Infinity,
    minLatitude: Infinity,
    minLongitude: Infinity,
  };

  const {maxLatitude, maxLongitude, minLatitude, minLongitude} =
    products.reduce(minAndMaxLatitudeAndLongitude, initialValues);

  const mapInitialRegion = {
    latitude: (maxLatitude + minLatitude) / 2,
    longitude: (maxLongitude + minLongitude) / 2,
    latitudeDelta: (maxLatitude - minLatitude) * 1.1,
    longitudeDelta: (maxLongitude - minLongitude) * 1.1,
  };

  return (
    <SafeAreaView>
      <View>
        <MapView
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: width,
            height: height,
            marginTop: -50,
          }}
          initialRegion={mapInitialRegion}>
          {Object.entries(productsMap).map(
            ([representativeProductId, productsArray]) => {
              const representativeProduct = productsArray[0];
              return (
                <Marker
                  key={representativeProductId}
                  coordinate={{
                    latitude: representativeProduct.location.latitude,
                    longitude: representativeProduct.location.longitude,
                  }}
                  onSelect={() => setSelectedProducts(productsArray)}
                  onDeselect={() => setSelectedProducts([])}
                  image={{
                    uri: 'https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/48/Box-icon.png',
                  }}
                />
              );
            },
          )}
        </MapView>
        {selectedProducts && (
          <FlatList
            // eslint-disable-next-line react-native/no-inline-styles
            style={{position: 'absolute', bottom: 180, paddingLeft: 0}}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{flexGrow: 1}}
            data={selectedProducts}
            renderItem={renderProductCard}
            keyExtractor={item => item.id}
            horizontal
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LocationMapScreen;
