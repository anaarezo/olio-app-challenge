import React from 'react';
import {render} from '@testing-library/react-native';

import ProductMap from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = (props: any) => {
    return <View testID="map">{props.children}</View>;
  };
  const MockCircle = (props: any) => {
    return <View testID="circle">{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Circle: MockCircle,
  };
});

describe('Product Details Page --- ProductMap', () => {
  it('should render the map view', () => {
    const props = {
      distance: 10,
      latitude: 37.78825,
      longitude: -122.4324,
    };
    const {getByTestId} = render(<ProductMap {...props} />);
    const mapView = getByTestId('map');
    expect(mapView).toBeDefined();
  });

  it('should render the circle on the map', () => {
    const props = {
      distance: 10,
      latitude: 37.78825,
      longitude: -122.4324,
    };
    const {getByTestId} = render(<ProductMap {...props} />);
    const circle = getByTestId('circle');
    expect(circle).toBeDefined();
  });
});
