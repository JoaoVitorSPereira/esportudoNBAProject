import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: 'Search for a team!',
          headerTitleStyle: { fontFamily: 'Arial', fontStyle: 'italic' },
        }}
        name="HomeSreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomeStack" component={HomeStack} />
    </Navigator>
  );
}
