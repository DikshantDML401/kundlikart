/* eslint-disable react/no-unstable-nested-components */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AstroSageBackHeader from '../../components/organisms/AstroSageBackHeader';
import AstrologerDetail from '../../screens/astrologerDetail';
import Call from '../../screens/call';
const CallStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Call"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Call"
        component={Call}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title={'KundliKart'}
              backArrow={true}
              rightIcons={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AstroDetails"
        component={AstrologerDetail}
        options={{
          headerShown: true,
          header: () => (
            <AstroSageBackHeader
              title="Astrologer Details"
              backArrow={true}
              rightIcons={false}
              walletIcon={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CallStack;
