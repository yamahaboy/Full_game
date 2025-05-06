import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export const InputField = ({ onSubmit, disabled }: { onSubmit: (value: string) => void; disabled?: boolean }) => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (value.trim()) {
            onSubmit(value.trim());
            setValue('');
        }
    };

    return (
        <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disabled}
            />
            <Button variant="contained" onClick={handleSubmit} disabled={disabled} sx={{ ml: 1 }}>
                Send
            </Button>
        </Box>
    );
};
