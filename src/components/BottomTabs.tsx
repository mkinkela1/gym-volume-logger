import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Graphs from '../pages/Graphs';
import Home from '../pages/Home';
import Session from '../pages/Session';

const Tabs = createBottomTabNavigator();

type TabIconProps = {
  route: RouteProp<ParamListBase, string>;
  focused: boolean;
  IconComponent: typeof Icon;
};

const TabIcon = ({route, focused, IconComponent}: TabIconProps) => {
  let icons: {[key: string]: string} = {
    Home: 'home',
    Session: 'dumbbell',
    Graphs: 'weight-kilogram',
  };

  let iconName = icons[route.name] ?? 'home';
  return (
    <IconComponent
      name={iconName}
      size={26}
      color={focused ? '#0d0' : '#0a0'}
    />
  );
};

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <TabIcon route={route} focused={focused} IconComponent={Icon} />
        ),
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      })}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Session" component={Session} />
      <Tabs.Screen name="Graphs" component={Graphs} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
