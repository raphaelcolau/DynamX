import { styled } from '@mui/material';
import { CustomThemeOptions } from '../../../assets/theme/darktheme'

export const StyledDrawer = styled('div')(({ theme }: { theme: CustomThemeOptions}) => ({
    backgroundColor: theme.palette?.background?.paper,
    borderRight: `1px solid ${theme.palette?.divider}`,
    position: 'fixed',
    top: 0,
    [theme.breakpoints.up('sm')]: {
        width: theme.drawerWidth,
        height: '100vh',
        flexShrink: 0,
    },
    "& .MuiDrawer-paper": {
        width: theme.drawerWidth,
        boxSizing: 'border-box',
    },
}));