import { useState } from "react";
import { createGame, joinGame } from "../../api/api";
import { useGameSession } from "../../hooks/useGameSession";
import { Box, Button, Container, Typography } from "@mui/material";
import { MessageDisplay } from "../../components/MessageDisplay";
import { InputField } from "../../components/InputField";

const GamePage: React.FC = () => {
    const [sessionId, setSessionId] = useState<string>('');
    const [playerId, setPlayerId] = useState<string>('');

    const { messages, send, waiting } = useGameSession(sessionId, playerId);

    const handleCreate = async () => {
        const [newSessionId, newPlayerId] = await createGame();
        setSessionId(newSessionId.trim());
        setPlayerId(newPlayerId.trim());
    };
    
    const handleJoin = async () => {
        const [newSessionId, newPlayerId] = await joinGame();
        setSessionId(newSessionId.trim());
        setPlayerId(newPlayerId.trim());
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Multiplayer Number Game
            </Typography>
            {!sessionId ? (
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleCreate}>Create Game</Button>
                    <Button variant="outlined" onClick={handleJoin}>Join Game</Button>
                </Box>
            ) : (
                <>
                    <MessageDisplay messages={messages} />
                    <InputField onSubmit={send} disabled={waiting} />
                </>
            )}
        </Container>
    )
}

export default GamePage