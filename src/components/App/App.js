import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header/Header';

// Change the primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#03a9f4',
    },
    secondary: {
      main: '#f4a01f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
