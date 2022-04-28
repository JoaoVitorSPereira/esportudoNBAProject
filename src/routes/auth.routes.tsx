import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();
const Stack = createStackNavigator();

const SignInRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignInScreen"
        component={SignIn}
      />
    </Stack.Navigator>
  );
};

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignInStack" component={SignInRoute} />
    </Navigator>
  );
}
