import { Container, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { CreateGameButton } from './components/CreateGameButton';
import { JoinGameButton } from './components/JoinGameButton';
import { InputField } from './components/InputField';
import { MessageDisplay } from './components/MessageDisplay';
import { useGameSession } from './hooks/useGameSession';
import { createGame, joinGame } from './api/api';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  const [sessionId, setSessionId] = useState('');
  const [playerId, setPlayerId] = useState('');

  const { messages, send, waiting } = useGameSession(sessionId, playerId);

  const handleCreate = async () => {
    const [s, p] = await createGame();
    setSessionId(s.trim());
    setPlayerId(p.trim());
  };

  const handleJoin = async () => {
    const [s, p] = await joinGame();
    setSessionId(s.trim());
    setPlayerId(p.trim());
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Multiplayer Number Game
        </Typography>
        {!sessionId ? (
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <CreateGameButton onClick={handleCreate} />
            <JoinGameButton onClick={handleJoin} />
          </Box>
        ) : (
          <>
            <MessageDisplay messages={messages} />
            <InputField onSubmit={send} disabled={waiting} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
