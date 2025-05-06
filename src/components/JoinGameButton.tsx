import { Button } from '@mui/material';

export const JoinGameButton = ({ onClick }: { onClick: () => void }) => (
    <Button variant="outlined" onClick={onClick}>Join Game</Button>
);
