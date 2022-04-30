import React, { FC } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './customTheme';
import RootComponent from './component/index';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootComponent />
    </ThemeProvider>
  );
}

export default App;
