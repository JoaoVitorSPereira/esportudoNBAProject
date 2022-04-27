import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Image = styled.Image`
  width: 80%;
  height: ${({ theme }) => theme.responsive.value(300)}px;
  border-radius: 5px;
  align-self: center;
  margin-top: 10px;
`;

export const DataContainer = styled.View`
  padding: 0 20px;
`;

export const TeamName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(25)}px;
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
    margin-bottom: ${theme.responsive.value(7)}px;
  `}
`;

export const TeamNickname = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(25)}px;
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
    margin-bottom: ${theme.responsive.value(7)}px;
  `}
`;

export const TeamCode = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(25)}px;
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
    margin-bottom: ${theme.responsive.value(7)}px;
  `}
`;

export const TeamCity = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(25)}px;
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
    margin-bottom: ${theme.responsive.value(7)}px;
  `}
`;
