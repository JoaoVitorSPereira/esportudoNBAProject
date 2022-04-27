import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
