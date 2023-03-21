import React from 'react-native';
import {render, screen} from '@testing-library/react-native';

import InfoBar from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Product Details Page --- InfoBar', () => {
  const setup = () => {
    const utils = render(<InfoBar title={'From Olio'} likes={1} />);
    const bar = screen.getByText('From Olio');
    const likes = screen.getByText('1 likes');
    return {
      bar,
      likes,
      ...utils,
    };
  };

  it('Should be rendered', () => {
    const {bar, likes} = setup();

    expect(bar).toBeTruthy();
    expect(likes).toBeTruthy();
  });

  it('Should click onShare', () => {
    const {} = setup();
  });
});
