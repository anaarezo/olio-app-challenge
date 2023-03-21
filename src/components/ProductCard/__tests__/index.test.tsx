import React from 'react-native';
import {render, screen} from '@testing-library/react-native';

import ProductCard from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Home Screen & LocationMap Screen --- ProductCard', () => {
  const setup = () => {
    const utils = render(
      <ProductCard
        product_photo={
          'https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/image.jpg'
        }
        title={'Ambipur air freshener plugin'}
        first_name={'Lloyd'}
        current_avatar={
          'https://cdn.olioex.com/uploads/avatar/file/oZq8DF3dzLEi3Fnf4XxMrg/image.jpg'
        }
        rating={5}
        distance={1}
        id={8039}
        views={3}
        created_at={'2020-12-12T10:49:18.000Z'}
        visitedArticles
      />,
    );

    // const bar = screen.getByText('From Olio');
    // const likes = screen.getByText('1 likes');
    return {
      //   bar,
      //   likes,
      ...utils,
    };
  };

  it('Should be rendered', () => {
    const {} = setup();
    // const {bar, likes} = setup();
    // expect(bar).toBeTruthy();
    // expect(likes).toBeTruthy();
  });
});
