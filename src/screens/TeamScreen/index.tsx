import React, { useEffect } from 'react';

import {
  Container,
  Image,
  TeamName,
  TeamNickname,
  TeamCode,
  TeamCity,
  DataContainer,
} from './styles';

import { RootStackScreenProps } from '@/routes';

import { useData } from '../../hooks/data';
import LoadSpinner from '../../components/LoadSpinner';
import Button from '../../components/Button';

export default function TeamScreen({
  route,
  navigation,
}: RootStackScreenProps<'TeamScreen'>) {
  const { id } = route.params;

  const { getTeamData, team, isLoading } = useData();

  useEffect(() => {
    getTeamData(id);
  }, []);
  return (
    <Container>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <Image source={{ uri: team[0]?.logo }} resizeMode="stretch" />
          <DataContainer>
            <TeamName>Team Name: {team[0]?.name}</TeamName>
            <TeamNickname>Nickname: {team[0]?.nickname}</TeamNickname>
            <TeamCode>Team Code: {team[0]?.code}</TeamCode>
            <TeamCity>City: {team[0]?.city}</TeamCity>
            <Button
              title="Players"
              onPress={() =>
                navigation.navigate('PlayersScreen', { id: team[0]?.id })
              }
            />
          </DataContainer>
        </>
      )}
    </Container>
  );
}
