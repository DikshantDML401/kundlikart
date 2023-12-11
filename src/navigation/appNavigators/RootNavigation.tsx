import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {If} from '../../helpers/if';
import DrawerNavigation from '../DrawerNavigators/DrawerNavigation';
import StackNavigation from '../stackNavigators/StackNavigation';

const RootNavigator = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <If show={!isLoggedIn}>
        <StackNavigation />
      </If>
      <If show={isLoggedIn}>
        <DrawerNavigation />
      </If>
    </NavigationContainer>
  );
};

export default RootNavigator;
