import React from 'react';

import { PressableProps } from 'react-native';

import { useData } from '../../hooks/data';
import LoadSpinner from '../LoadSpinner';

import {
  FlexView,
  Container,
  ModalShadowButton,
  PlayerWeight,
  PlayerDOB,
  PlayerHeight,
  PlayerName,
} from './styles';

interface ModalProps extends PressableProps {
  isOpen: boolean;
  playerName: string;
  playerDOB: string;
  playerHeight: string;
  playerWeight: string;
}

export default function Modal({
  isOpen,
  playerName,
  playerDOB,
  playerHeight,
  playerWeight,
  onPress,
}: ModalProps) {
  const { isLoading } = useData();
  return (
    <Container animationType="fade" transparent visible={isOpen}>
      <ModalShadowButton onPress={onPress}>
        <FlexView>
          {isLoading ? (
            <LoadSpinner />
          ) : (
            <>
              <PlayerName>Name: {playerName}</PlayerName>
              <PlayerDOB>
                Date of Birth: {playerDOB === null ? 'NO DATA' : playerDOB}
              </PlayerDOB>
              <PlayerHeight>
                Height: {playerHeight && playerHeight}
                {playerHeight === null ? 'NO DATA' : 'm'}
              </PlayerHeight>
              <PlayerWeight>
                Weight: {playerWeight && playerWeight}
                {playerWeight === null ? 'NO DATA' : 'kg'}
              </PlayerWeight>
            </>
          )}
        </FlexView>
      </ModalShadowButton>
    </Container>
  );
}
