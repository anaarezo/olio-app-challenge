import React, {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Circle} from 'react-native-maps';

import * as S from './styles';

interface IProductMap {
  distance: number;
  latitude: number;
  longitude: number;
}

const DIMENSION_DELTA = 0.002;

const ProductMap = (props: IProductMap) => {
  const {distance, latitude, longitude} = props;
  const {width} = Dimensions.get('screen');
  return (
    <>
      <S.Place>
        <S.Aprox>{'Approx. Location'}</S.Aprox>
        <S.AproxDistance>
          <Icon name="map-marker" size={13} color="#757576" />
          {` ${distance}mi away`}
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
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: DIMENSION_DELTA,
            longitudeDelta: DIMENSION_DELTA,
          }}
          testID="map">
          <Circle
            center={{
              latitude: latitude,
              longitude: longitude,
            }}
            radius={20}
            strokeColor={'#bb4291'}
            fillColor={'rgba(187,66,145,0.05)'}
            testID="circle"
          />
        </MapView>
      </S.LocationMap>
    </>
  );
};

export default ProductMap;
