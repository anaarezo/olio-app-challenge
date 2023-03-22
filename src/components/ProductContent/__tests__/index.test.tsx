import React from 'react';
import {render} from '@testing-library/react-native';

import ProductContent from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('ProductContent', () => {
  it('renders the user information and product title', () => {
    const props = {
      first_name: 'Lloyd',
      current_avatar:
        'https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/image.jpg',
      rating: 5,
      title: 'Ambipur air freshener plugin',
      created_at: '2020-12-12T10:49:18.000Z',
      roles: ['Volunteer'],
    };

    const {getByText} = render(<ProductContent {...props} />);
    const userFirstName = getByText('Lloyd is giving away');
    const productTitle = getByText('Ambipur air freshener plugin');
    expect(userFirstName).toBeDefined();
    expect(productTitle).toBeDefined();
  });

  it('does not render rating info if the user does not have a rating', () => {
    const props = {
      first_name: 'Lloyd',
      current_avatar:
        'https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/image.jpg',
      rating: null,
      title: 'Ambipur air freshener plugin',
      created_at: '2020-12-12T10:49:18.000Z',
      roles: ['Volunteer'],
    };
    const {queryByTestId} = render(<ProductContent {...props} />);
    const ratingInfo = queryByTestId('ratingInfo');
    expect(ratingInfo).toBeNull();
  });
});
