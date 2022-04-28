import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: 'Arial Bold';
    font-style: italic;
    color: ${theme.colors.black};
    font-size: ${theme.responsive.value(40)}px;
  `}
`;

export const LoginButton = styled.Pressable`
  ${({ theme }) => css`
    width: ${theme.responsive.value(120)}px;
    height: ${theme.responsive.value(40)}px;
    background-color: ${theme.colors.black};
    margin-top: ${theme.responsive.value(50)}px;
    border-radius: 8px;
  `}
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: 'Arial';
    color: ${theme.colors.white};
    font-size: ${theme.responsive.value(15)}px;
  `}
`;
