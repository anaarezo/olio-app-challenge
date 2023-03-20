import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {StackScreen} from './src/routes/Stack';
import {setupStore} from './src/store';

const store = setupStore();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
