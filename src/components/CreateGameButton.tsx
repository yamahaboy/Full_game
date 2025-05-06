import { Button } from '@mui/material';

export const CreateGameButton = ({ onClick }: { onClick: () => void }) => (
    <Button variant="contained" onClick={onClick}>Create Game</Button>
);
