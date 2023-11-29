import { Drawer, styled } from '@mui/material';
import { CustomThemeOptions } from '../../../assets/theme/darktheme'

export const StyledDrawer = styled((props: any) => {
    return (
        <Drawer
            elevation={0}
            {...props}
        />
    )
})(({ theme }: { theme: CustomThemeOptions}) => ({
    height: '100vh',
    width: theme.drawerWidth,
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('sm')]: {
        flexShrink: 0,
    },
    "& .MuiDrawer-paper": {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: theme.drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.default,
    },
}));