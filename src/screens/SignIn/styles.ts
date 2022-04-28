import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: 'Arial Bold';
    font-style: italic;
    color: ${theme.colors.black};
    font-size: ${theme.responsive.value(30)}px;
    margin-bottom: ${theme.responsive.value(20)}px;
  `}
`;
