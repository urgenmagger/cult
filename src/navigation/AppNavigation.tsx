import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Start, Login, Home, NoConnect} from '../screens';

export enum Screens {
  Start = 'Start',
  Login = 'Login',
  Home = 'Home',
  NoConnect = 'NoConnect',
}

export type RootStackList = {
  [Screens.Start]: undefined;
  [Screens.Login]: undefined;
  [Screens.Home]: {email: string};
  [Screens.NoConnect]: undefined;
};

const Stack = createNativeStackNavigator<RootStackList>();

export const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Start}
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.Login}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.Home}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.NoConnect}
          component={NoConnect}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
