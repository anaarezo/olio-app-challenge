import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LocationMapScreen,
  ProductDetailsScreen,
} from '../../screens';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={LocationMapScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
