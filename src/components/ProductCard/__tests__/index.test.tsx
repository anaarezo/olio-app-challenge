import React from 'react-native';
import {render} from '@testing-library/react-native';

import ProductCard from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('ProductCard', () => {
  it('should render product information', () => {
    const props = {
      product_photo: 'https://example.com/product-photo.jpg',
      title: 'Product Title',
      first_name: 'John',
      current_avatar: 'https://example.com/avatar.jpg',
      rating: 3,
      distance: 10,
      id: 123,
      views: 100,
      created_at: '2022-01-01T00:00:00.000Z',
      visitedArticles: [123],
    };

    const {getByTestId} = render(<ProductCard {...props} />);

    expect(getByTestId('productPhoto')).toHaveProperty('source', {
      uri: props.product_photo,
    });
    expect(getByTestId('product-title')).toHaveTextContent(props.title);
    expect(getByTestId('user-avatar')).toHaveProp('source', {
      uri: props.current_avatar,
    });
    expect(getByTestId('user-name')).toHaveTextContent(props.first_name);
    expect(getByTestId('rating')).toHaveTextContent('1.5');
    expect(getByTestId('distance')).toHaveTextContent(`${props.distance}mi`);
    expect(getByTestId('views')).toHaveTextContent(`${props.views}`);
    expect(getByTestId('added-date')).toHaveTextContent('3 months ago');
  });
});
