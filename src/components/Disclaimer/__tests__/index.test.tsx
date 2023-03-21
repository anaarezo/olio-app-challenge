import React from 'react-native';
import {render, screen} from '@testing-library/react-native';

import Disclaimer from '../index';

describe('Product Details Page --- Disclaimer', () => {
  const setup = () => {
    const utils = render(<Disclaimer />);
    const disclaimer = screen.getByText(
      'Everything in this section is givem away for free 💚. Strictly no selling, no swaps, no donations',
    );
    return {
      disclaimer,
      ...utils,
    };
  };

  it('Should be rendered', () => {
    const {disclaimer} = setup();
    expect(disclaimer).toBeTruthy();
  });
});
