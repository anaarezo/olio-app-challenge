import React, {View, Dimensions} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context';
import mockData from '../../../mockData.json';
// import * as S from './styles';

interface IMaxMinCoordinates {
  maxLatitude: number;
  maxLongitude: number;
  minLatitude: number;
  minLongitude: number;
}

interface ILocation {
  location: {
    latitude: number;
    longitude: number;
  };
}

function minAndMaxLatitudeAndLongitude(
  coordinate: IMaxMinCoordinates,
  {location}: ILocation,
) {
  return {
    maxLatitude: Math.max(coordinate.maxLatitude, location.latitude),
    maxLongitude: Math.max(coordinate.maxLongitude, location.longitude),
    minLatitude: Math.min(coordinate.minLatitude, location.latitude),
    minLongitude: Math.min(coordinate.minLongitude, location.longitude),
  };
}

const {width, height} = Dimensions.get('screen');

const initialValues = {
  maxLatitude: -Infinity,
  maxLongitude: -Infinity,
  minLatitude: Infinity,
  minLongitude: Infinity,
};
const {maxLatitude, maxLongitude, minLatitude, minLongitude} = mockData.reduce(
  minAndMaxLatitudeAndLongitude,
  initialValues,
);

const mapInitialRegion = {
  latitude: (maxLatitude + minLatitude) / 2,
  longitude: (maxLongitude + minLongitude) / 2,
  latitudeDelta: (maxLatitude - minLatitude) * 1.1,
  longitudeDelta: (maxLongitude - minLongitude) * 1.1,
};

const LocationMapScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <MapView
          style={{
            width: width,
            height: height,
          }}
          initialRegion={mapInitialRegion}>
          {mockData.map((product, index) => (
            <Circle
              key={index}
              center={{
                latitude: product.location.latitude,
                longitude: product.location.longitude,
              }}
              radius={20}
              strokeColor={'rgb(187,66,145)'}
              fillColor={'rgba(187,66,145,0.05)'}
            />
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default LocationMapScreen;
