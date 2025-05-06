import { Box, Typography } from '@mui/material';

export const MessageDisplay = ({ messages }: { messages: string[] }) => (
    <Box sx={{ whiteSpace: 'pre-line', mt: 2 }}>
        {messages.map((msg, index) => (
            <Typography key={index} variant="body2">{msg}</Typography>
        ))}
    </Box>
);
