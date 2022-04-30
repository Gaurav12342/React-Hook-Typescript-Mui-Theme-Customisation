import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Submit</Button>
    </ThemeProvider>
  );
}

export default App;
