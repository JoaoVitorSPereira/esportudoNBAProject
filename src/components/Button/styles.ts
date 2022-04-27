import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.responsive.value(18)}px;
    color: ${theme.colors.white};
    font-family: 'Arial';
  `}
`;
