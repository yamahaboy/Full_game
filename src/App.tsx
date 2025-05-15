import { createTheme, ThemeProvider } from '@mui/material';
import GamePage from './router/view/GamePage';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GamePage />
    </ThemeProvider>
  );
};

export default App;
