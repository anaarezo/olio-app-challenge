import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetailsScreen} from '../../screens';
import {BottomTabs} from '../BottomTabs';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
