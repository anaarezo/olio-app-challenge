import React from 'react-native';
import {render, screen} from '@testing-library/react-native';

import InfoBar from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Product Details Page --- InfoBar', () => {
  const setup = () => {
    const utils = render(<InfoBar title={'From Olio'} likes={2} />);
    const bar = screen.getByText('From Olio');
    const likes = screen.queryAllByText('2 likes');
    return {
      bar,
      likes,
      ...utils,
    };
  };

  it('Should be rendered', () => {
    const {bar, likes, debug} = setup();
    debug();
    expect(bar).toBeTruthy();
    expect(likes).toBeTruthy();
  });
});
