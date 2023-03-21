import React from 'react-native';
import {render, screen} from '@testing-library/react-native';

import ProductDescription from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Product Details Page --- ProductDescription', () => {
  const setup = () => {
    const utils = render(
      <ProductDescription
        description={'Device only but refills are available most places'}
        section={'product'}
        collection_notes={'Any time!'}
      />,
    );
    const description = screen.getByText(
      'Device only but refills are available most places',
    );

    const collection_notes = screen.getByText('Any time!');

    return {
      description,
      collection_notes,
      ...utils,
    };
  };

  it('Should be rendered', () => {
    const {description, collection_notes} = setup();

    expect(description).toBeTruthy();
    expect(collection_notes).toBeTruthy();
  });
});
