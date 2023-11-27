import { Drawer, styled } from '@mui/material';
import { CustomThemeOptions } from '../../../assets/theme/darktheme'

export const StyledDrawer = styled((props: any) => {
    return (
        <Drawer
            {...props}
        />
    )
})(({ theme }: { theme: CustomThemeOptions}) => ({
    backgroundColor: theme.palette?.background?.paper,
    borderRight: `1px solid ${theme.palette?.divider}`,
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