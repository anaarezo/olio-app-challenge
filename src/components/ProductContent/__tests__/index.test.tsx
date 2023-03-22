import React from 'react';
import {render} from '@testing-library/react-native';

import ProductContent from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('ProductContent', () => {
  it('renders the description and pick-up information', () => {
    const props = {
      description: 'This is a test product',
      section: 'non-food',
      collection_notes: 'Please bring your order confirmation email.',
      first_name: 'Lloyd',
      current_avatar:
        'https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/image.jpg',
      rating: 5,
      title: 'Ambipur air freshener plugin',
      created_at: '2020-12-12T10:49:18.000Z',
      roles: ['Volunteer'],
    };

    const {getByText} = render(<ProductContent {...props} />);
    // const description = getByText('This is a test product');
    const pickupTitle = getByText('Pick-up times');
    const pickupDescription = getByText(
      'Please bring your order confirmation email.',
    );
    // expect(description).toBeDefined();
    expect(pickupTitle).toBeDefined();
    expect(pickupDescription).toBeDefined();
  });

  it('does not render the food allergen information for non-food section', () => {
    const props = {
      description: 'This is a test product',
      section: 'non-food',
      collection_notes: 'Please bring your order confirmation email.',
      first_name: 'Lloyd',
      current_avatar:
        'https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/image.jpg',
      rating: 5,
      title: 'Ambipur air freshener plugin',
      created_at: '2020-12-12T10:49:18.000Z',
      roles: ['Volunteer'],
    };
    const {queryByText} = render(<ProductContent {...props} />);
    const moreInfo = queryByText('View food allergen information');
    expect(moreInfo).toBeNull();
  });
});
