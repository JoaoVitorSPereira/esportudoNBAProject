import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { DataProvider } from './src/hooks/data';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Routes />
      </DataProvider>
    </ThemeProvider>
  );
}
