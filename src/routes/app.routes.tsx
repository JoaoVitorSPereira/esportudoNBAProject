import React from 'react';

import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import NBALogo from '../assets/icons/nbaLogo.svg';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TeamScreen from '../screens/TeamScreen';
import PlayersScreen from '../screens/PlayersScreen';
import theme from '../global/styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();
const Stack = createStackNavigator();

const HeaderLogo = (title: string) => {
  return <></>;
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { height: theme.responsive.value(100) },
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <NBALogo style={{ width: 60, height: 60 }} />
              <Text
                style={{
                  fontFamily: 'Arial Bold',
                  fontStyle: 'italic',
                  fontSize: 16,
                }}
              >
                Search for your team!
              </Text>
            </View>
          ),
        }}
        name="HomeSreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="TeamScreen"
        options={{
          headerStyle: { height: theme.responsive.value(100) },
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <NBALogo style={{ width: 60, height: 60 }} />
              <Text
                style={{
                  fontFamily: 'Arial Bold',
                  fontStyle: 'italic',
                  fontSize: 16,
                }}
              >
                Team Detail
              </Text>
            </View>
          ),
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
          headerStyle: { height: theme.responsive.value(100) },
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <NBALogo style={{ width: 60, height: 60 }} />
              <Text
                style={{
                  fontFamily: 'Arial Bold',
                  fontStyle: 'italic',
                  fontSize: 16,
                }}
              >
                Team Players
              </Text>
            </View>
          ),
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
