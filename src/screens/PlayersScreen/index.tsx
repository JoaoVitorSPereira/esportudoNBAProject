import React, { useEffect, useState } from 'react';

import { format, parseISO } from 'date-fns';

import { PlayersModel } from '@/types';

import { RootStackScreenProps } from '@/routes';

import {
  Container,
  List,
  PlayerContainer,
  PlayerName,
  NoPlayersText,
} from './styles';

import { useData } from '../../hooks/data';
import Modal from '../../components/Modal';

export default function PlayersScreen({
  route,
  navigation,
}: RootStackScreenProps<'PlayersScreen'>) {
  const [open, setOpen] = useState(false);
  const { id } = route.params;
  const { getPlayersData, players, player, getPlayerData } = useData();

  async function handleModal(id: number) {
    setOpen(!open);
    await getPlayerData(id);
  }

  useEffect(() => {
    getPlayersData(id);
  }, []);
  return (
    <Container>
      {players.length === 0 ? (
        <NoPlayersText>There are no players data to show!</NoPlayersText>
      ) : (
        <>
          <List<React.ElementType>
            data={players}
            renderItem={({ item }: { item: PlayersModel }) => (
              <PlayerContainer onPress={() => handleModal(item.id)}>
                <PlayerName>
                  {item.firstname} {item.lastname}
                </PlayerName>
              </PlayerContainer>
            )}
            keyExtractor={(item: PlayersModel) => item.id.toString()}
          />
          <Modal
            isOpen={open}
            onPress={() => setOpen(false)}
            playerDOB={
              player[0]?.birth.date &&
              format(parseISO(player[0]?.birth.date), 'dd/MM/yyyy')
            }
            playerHeight={player[0]?.height.meters}
            playerName={`${player[0]?.firstname} ${player[0]?.lastname}`}
            playerWeight={player[0]?.weight.kilograms}
          />
        </>
      )}
    </Container>
  );
}
