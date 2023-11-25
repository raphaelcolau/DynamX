import { createTheme, ThemeOptions } from "@mui/material";

interface CustomThemeOptions extends ThemeOptions {
    drawerWidth?: number;
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
    drawerWidth: 110,
} as CustomThemeOptions);