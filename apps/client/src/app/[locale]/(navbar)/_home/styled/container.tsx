'use client';
import { styled, Box } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
}));