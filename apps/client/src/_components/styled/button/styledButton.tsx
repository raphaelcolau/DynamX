import { ThemeOptions, styled, useTheme } from '@mui/material';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    boxSizing: 'border-box',
    borderRadius: '0px',
    padding: '0.3rem 0.7rem',
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: theme.palette.primary.main,
    transition: 'background-color 0.2s ease-in-out',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        outline: '1px solid transparent',
    },
}));