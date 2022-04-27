/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import AppRoutes from './app.routes';

interface TeamScreenProps {
  id: number;
}

interface PlayersScreenProps {
  id: number;
}

export type RootStackParamList = {
  HomeScreen: undefined;
  SignInScreen: undefined;
  TeamScreen: TeamScreenProps;
  PlayersScreen: PlayersScreenProps;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
