import { FlatList, Image } from 'react-native';
import styled, { css } from 'styled-components/native';
import { TeamModel } from '@/types';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<TeamModel>).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 5px 0px;
`;

export const TeamContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.responsive.value(10)}px;
`;

export const TeamName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold'
    width: 200px;
    margin-left: ${theme.responsive.value(20)}px;
  `}
`;

export const TeamImage = styled(Image)`
  width: ${({ theme }) => theme.responsive.value(118)}px;
  height: ${({ theme }) => theme.responsive.value(73)}px;
`;
