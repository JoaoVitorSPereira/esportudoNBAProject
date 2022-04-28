import React from 'react';

import { TeamModel } from '@/types';

import { useData } from '../../hooks/data';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  List,
  TeamContainer,
  TeamImage,
  TeamName,
  ButtonContainer,
} from './styles';

import { RootStackScreenProps } from '@/routes';

import LoadSpinner from '../../components/LoadSpinner';
import Button from '../../components/Button';

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<'HomeScreen'>) {
  const { teams, isLoading } = useData();
  const { signOutAsyncStorage } = useAuth();
  return (
    <Container>
      {isLoading ? (
        <LoadSpinner />
      ) : (
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
      )}
      <ButtonContainer>
        <Button title="Logout" onPress={signOutAsyncStorage} />
      </ButtonContainer>
    </Container>
  );
}
