import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTabs from './src/components/BottomTabs';

const HomeScreen = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default HomeScreen;
