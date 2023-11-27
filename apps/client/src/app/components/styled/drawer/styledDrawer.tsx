import { styled } from '@mui/material';
import { CustomThemeOptions } from '../../../assets/theme/darktheme'

export const StyledDrawer = styled('div')(({ theme }: { theme: CustomThemeOptions}) => ({
    backgroundColor: theme.palette?.background?.paper,
    borderRight: `1px solid ${theme.palette?.divider}`,
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: theme.drawerWidth,
    [theme.breakpoints.up('sm')]: {
        flexShrink: 0,
    },
    "& .MuiDrawer-paper": {
        width: theme.drawerWidth,
        boxSizing: 'border-box',
    },
}));