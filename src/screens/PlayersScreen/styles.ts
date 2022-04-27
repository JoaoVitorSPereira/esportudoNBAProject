import styled, { css } from 'styled-components/native';

import { PlayersModel } from '@/types';

import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled(
  FlatList as new () => FlatList<PlayersModel[]>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 5px 0px;
`;

export const NoPlayersText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(40)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
    padding: 30px;
  `}
`;

export const PlayerContainer = styled.View`
  height: ${({ theme }) => theme.responsive.value(130)}px;
  padding: 10px 20px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.responsive.value(10)}px;
`;

export const PlayerName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold'
    width: 200px;
  `}
`;

export const PlayerDOB = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold'
    width: 200px;
  `}
`;

export const PlayerWeight = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold'
    width: 200px;
  `}
`;

export const PlayerAffiliation = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
  `}
`;

export const PlayerHeight = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold'
    width: 200px;
  `}
`;
