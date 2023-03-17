import React from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LocationMapScreen,
  ProductDetailsScreen,
} from '../../screens';

const Stack = createStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LocationMap" component={LocationMapScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
