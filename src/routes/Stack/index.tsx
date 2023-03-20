import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetailsScreen} from '../../screens';
import {BottomTabs} from '../BottomTabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

interface IRoute {
  route: RouteProp<ParamListBase, 'ProductDetails'>;
}

export const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({route}: IRoute) => ({title: route?.params?.product.title})}
      />
    </Stack.Navigator>
  );
};
