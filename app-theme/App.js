import React from 'react';
import { useColorScheme } from 'react-native';

import Home from './src/Home';

import { ThemeProvider } from 'styled-components';
import Themes from './src/Theme';

export default function App() {

  const deviceTheme = useColorScheme();
  const theme = Themes[deviceTheme] || theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  );
}

