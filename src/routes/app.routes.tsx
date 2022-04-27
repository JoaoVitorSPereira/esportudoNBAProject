import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TeamScreen from '../screens/TeamScreen';
import PlayersScreen from '../screens/PlayersScreen';

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
      <Stack.Screen
        name="TeamScreen"
        options={{
          headerTitle: 'Team Detail',
          headerTitleStyle: { fontFamily: 'Arial', fontStyle: 'italic' },
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            color: '#000',
            fontFamily: 'Arial',
            fontStyle: 'italic',
          },
          headerTintColor: '#000',
        }}
        component={TeamScreen}
      />
      <Stack.Screen
        name="PlayersScreen"
        options={{
          headerTitle: 'Team Players',
          headerTitleStyle: { fontFamily: 'Arial', fontStyle: 'italic' },
          headerBackTitleStyle: {
            color: '#000',
            fontFamily: 'Arial',
            fontStyle: 'italic',
          },
          headerBackTitle: 'Back',
          headerTintColor: '#000',
        }}
        component={PlayersScreen}
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
