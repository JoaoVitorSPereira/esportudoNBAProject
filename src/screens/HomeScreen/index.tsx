import React from 'react';

import { TeamModel } from '@/types';

import { useData } from '../../hooks/data';

import { Container, List, TeamContainer, TeamImage, TeamName } from './styles';

import { RootStackScreenProps } from '@/routes';

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<'HomeScreen'>) {
  const { teams } = useData();
  return (
    <Container>
      <List<React.ElementType>
        data={teams}
        renderItem={({ item }: { item: TeamModel }) => (
          <TeamContainer
            onPress={() => navigation.navigate('TeamScreen', { id: item.id })}
          >
            <TeamImage source={{ uri: item.logo }} resizeMode="contain" />
            <TeamName>{item.name}</TeamName>
          </TeamContainer>
        )}
        keyExtractor={(item: TeamModel) => item.id.toString()}
      />
    </Container>
  );
}
