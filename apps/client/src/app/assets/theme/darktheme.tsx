import { createTheme, ThemeOptions } from "@mui/material";

export interface CustomThemeOptions extends ThemeOptions {
    drawerWidth?: number | string;
    breakpoints: any;
    typography: any;
    palette: any;
    spacing: any;
}

export const darktheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E06E0B',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f48fb1',
        },
        divider: '#303030',
        background: {
            default: '#1F2123',
            paper: '#424242',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1536,
        },
    },
    drawerWidth: '110px',
} as CustomThemeOptions);