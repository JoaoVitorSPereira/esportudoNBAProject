import React from 'react';

import TouchID from 'react-native-touch-id';

import { Alert } from 'react-native';

import NBALogo from '../../assets/icons/nbaLogo.svg';

import { Container, Title } from './styles';

import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';

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
    <Container>
      <NBALogo style={{ width: 200, height: 200, marginBottom: 30 }} />
      <Title>Sign In to find your favorite NBA team</Title>
      <Button title="Sign In" onPress={handleAuthenticate} />
    </Container>
  );
}
