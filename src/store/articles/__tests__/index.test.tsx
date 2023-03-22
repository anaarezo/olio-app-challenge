import {rest} from 'msw';
import {setupServer} from 'msw/node';
import React, {PropsWithChildren} from 'react';
import {render, RenderOptions, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {HomeScreen} from '../../../screens';
import {store as Store, AppStore} from '../../index';
import {IProduct} from '../interface';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: AppStore;
}

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = (props: any) => {
    return <View testID="map">{props.children}</View>;
  };
  const MockCircle = (props: any) => {
    return <View testID="circle">{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Circle: MockCircle,
  };
});

function renderWithProviders(
  ui: React.ReactElement,
  {store = Store, ...renderOptions}: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}

describe('Articles - API', () => {
  const handlers = [
    rest.get(
      'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json',
      (req, res, ctx) => {
        const mockArticles: IProduct[] = [];
        return res(ctx.json(mockArticles));
      },
    ),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('queries for list of artiles and receives 0 articles from the articles API', async () => {
    renderWithProviders(<HomeScreen navigation={{}} />);
    const findNoArticles = await screen.queryAllByTestId('productPhoto');
    expect(findNoArticles).toHaveLength(0);
  });
});
