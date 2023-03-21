import React from 'react-native';
import {render, screen} from '@testing-library/react-native';

import RequestButton from '../index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('Product Details Page --- RequestButton', () => {
  const setup = () => {
    const utils = render(<RequestButton distance={0} />);
    const button = screen.getByText('Request this');
    return {
      button,
      ...utils,
    };
  };

  it('Should be rendered', () => {
    const {button} = setup();
    expect(button).toBeTruthy();
  });
});
