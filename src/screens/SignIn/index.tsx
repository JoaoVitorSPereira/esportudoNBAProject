import React from 'react';

import TouchID from 'react-native-touch-id';

import { Alert } from 'react-native';
import * as S from './styles';

import { useAuth } from '../../hooks/auth';

export default function SignIn() {
  const { signInAsyncStorage } = useAuth();

  function handleAuthenticate() {
    TouchID.authenticate()
      .then(success => {
        signInAsyncStorage();
        Alert.alert('Success', 'You are logged in!', success.message);
      })
      .catch(error => {
        Alert.alert('Something went wrong', error.message);
      });

    TouchID.isSupported()
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else if (biometryType === 'TouchID') {
          console.log('TouchID is supported.');
        } else if (biometryType === true) {
          console.log('TouchID is supported on Android.');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <S.Container>
      <S.Title>Sign In to find your favorite NBA team</S.Title>
      <S.LoginButton onPress={() => handleAuthenticate()}>
        <S.LoginButtonText>Sign In.</S.LoginButtonText>
      </S.LoginButton>
    </S.Container>
  );
}
