/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../stackNavigators/HomeStack';
import Notification from '../../screens/notification';
import Preferences from '../../screens/prefrences';
import {lightYellow} from '../../styles/colors';
import CustomDrawer from './CustomDrawer';
import ChangeLanguage from '../../screens/changeLanguage';
import UpgradePlan from '../../screens/upgradePlan';
import RemnoveAds from '../../screens/removeAds';
import Feedback from '../../screens/feedback';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const routing = [
    {
      name: 'Dashboard',
      component: HomeStack,
      unmount: false,
      headerShown: false,
    },
    {
      name: 'Preferences',
      component: Preferences,
      unmount: false,
      headerShown: true,
    },

    {
      name: 'Notification',
      component: Notification,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'changeLang',
      component: ChangeLanguage,
      unmount: true,
      headerShown: true,
    },
    {
      name: 'upgradePlan',
      component: UpgradePlan,
      unmount: false,
      headerShown: true,
    },
    {
      name: 'removeAds',
      component: RemnoveAds,
      unmount: true,
      headerShown: true,
    },
    {
      name: 'Feedback',
      component: Feedback,
      unmount: false,
      headerShown: true,
    },
  ];
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      {routing &&
        routing?.map((val, index) => (
          <Drawer.Screen
            name={val.name}
            component={val.component}
            key={index}
            options={{headerStyle: {backgroundColor: lightYellow}}}
          />
        ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
