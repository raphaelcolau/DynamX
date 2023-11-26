import { createTheme, ThemeOptions } from "@mui/material";

export interface CustomThemeOptions extends ThemeOptions {
    drawerWidth?: number;
    breakpoints: any;
}

export const darktheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E06E0B',
        },
        secondary: {
            main: '#f48fb1',
        },
        divider: '#303030',
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
    drawerWidth: 110,
} as CustomThemeOptions);