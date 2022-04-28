import styled, { css } from 'styled-components/native';
import { Modal } from 'react-native';

export const FlexView = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  width: 95%;
`;

export const ModalShadowButton = styled.Pressable`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const Container = styled(Modal)`
  width: 100%;
`;

export const PlayerDOB = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;

export const PlayerName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
  `}
`;

export const PlayerWeight = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;

export const PlayerBirthPlace = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;

export const PlayerAffiliation = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;

export const PlayerHeight = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(20)}px;
    color: ${theme.colors.black};
    font-family: 'Arial Bold';
    margin-top: ${theme.responsive.value(10)}px;
  `}
`;
