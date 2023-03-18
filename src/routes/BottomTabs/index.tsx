import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, LocationMapScreen} from '../../screens';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="home" size={25} color="#666666" />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={LocationMapScreen}
        options={{
          title: 'Map',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Icon name="map-marker" size={25} color="#666666" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
