import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {StackScreen} from './src/routes/Stack';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
