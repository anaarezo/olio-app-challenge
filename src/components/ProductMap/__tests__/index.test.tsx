import React from 'react';
import {render} from '@testing-library/react-native';

import ProductMap from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Product Details Page --- ProductMap', () => {
  it('renders the map view', () => {
    const props = {
      distance: 10,
      latitude: 37.78825,
      longitude: -122.4324,
    };
    const {getByTestId} = render(<ProductMap {...props} />);
    const mapView = getByTestId('map');
    expect(mapView).toBeDefined();
  });

  it('renders the circle on the map', () => {
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
