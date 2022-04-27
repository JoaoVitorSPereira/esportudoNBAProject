import theme from '../../global/styles/theme';
import React from 'react';

import { ActivityIndicator } from 'react-native';

export default function LoadSpinner() {
  return (
    <ActivityIndicator
      size={20}
      color={theme.colors.black}
      style={{ marginTop: 20 }}
    />
  );
}
