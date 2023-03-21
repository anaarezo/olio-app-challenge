import {useState} from 'react';
import React, {Dimensions, TouchableOpacity, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';

import useProductsMap from './hooks/useProductsMap';
import * as S from './styles';

import {IProduct} from '../../store/articles/interface';
import {ILocation, IMaxMinCoordinates, IProductCard} from './interface';
import {ProductCard} from '../../components';
import {useDispatch} from 'react-redux';
import {visitedSlice} from '../../store/visited/slice';
import {useAppSelector} from '../../store/hooks';

const LocationMapScreen = ({navigation}: any) => {
  const {products: products, productsMap: productsMap} = useProductsMap();
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const visitedArticles = useAppSelector(
    state => state.visited.articlesVisited,
  );

  const dispatch = useDispatch();

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
          dispatch(visitedSlice.actions.addVisited(item.id));
          navigation.navigate('ProductDetails', {product: item});
        }}>
        <ProductCard
          product_photo={item?.images[0].files.medium}
          title={item.title}
          first_name={item.user.first_name}
          current_avatar={item?.user.current_avatar.small}
          rating={item.user.rating.rating}
          distance={item.location.distance}
          id={item.id}
          views={item.reactions.views}
          created_at={item.created_at}
          visitedArticles={visitedArticles}
        />
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
      <S.MapContainer>
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
      </S.MapContainer>
    </SafeAreaView>
  );
};

export default LocationMapScreen;
