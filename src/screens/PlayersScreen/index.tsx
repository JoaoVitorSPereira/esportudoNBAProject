import React, { useEffect } from 'react';

import { format, parseISO } from 'date-fns';

import { PlayersModel } from '@/types';

import { RootStackScreenProps } from '@/routes';

import {
  Container,
  List,
  PlayerContainer,
  PlayerName,
  PlayerAffiliation,
  PlayerHeight,
  PlayerWeight,
  PlayerDOB,
  NoPlayersText,
} from './styles';

import { useData } from '../../hooks/data';

export default function PlayersScreen({
  route,
  navigation,
}: RootStackScreenProps<'PlayersScreen'>) {
  const { id } = route.params;
  const { getPlayersData, players } = useData();

  useEffect(() => {
    getPlayersData(id);
  }, []);
  console.log(players);
  return (
    <Container>
      {players.length === 0 ? (
        <NoPlayersText>There are no players data to show!</NoPlayersText>
      ) : (
        <List<React.ElementType>
          data={players}
          renderItem={({ item }: { item: PlayersModel }) => (
            <PlayerContainer>
              <PlayerName>
                {item.firstname} {item.lastname}
              </PlayerName>
              {item.affiliation && (
                <PlayerAffiliation>From: {item.affiliation}</PlayerAffiliation>
              )}
              {item.birth.date && (
                <PlayerDOB>
                  {format(parseISO(item.birth.date), 'mm/dd/yyyy')}
                </PlayerDOB>
              )}
              {item.height.meters && (
                <PlayerHeight>Height: {item.height.meters}m</PlayerHeight>
              )}
              {item.weight.kilograms && (
                <PlayerWeight>Weight: {item.weight.kilograms}KG</PlayerWeight>
              )}
            </PlayerContainer>
          )}
          keyExtractor={(item: PlayersModel) => item.id.toString()}
        />
      )}
    </Container>
  );
}
