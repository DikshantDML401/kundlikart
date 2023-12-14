import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardStack from './DashboardStack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardStack} />
      {/* <Stack.Screen name="AccountStack" component={AccountStack} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
