import React, { FC } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './customTheme';
// import RootComponent from './component/index';
import MainComponent from './pages/MainComponent';
const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* Root Component is use for Button demo */}
      {/* <RootComponent /> */}

      {/* Main component is use for memo and useMemo demo */}
      <MainComponent />
    </ThemeProvider>
  );
}

export default App;
