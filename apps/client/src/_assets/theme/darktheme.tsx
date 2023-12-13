'use client';
import { createTheme, ThemeOptions } from "@mui/material";

export interface CustomThemeOptions extends ThemeOptions {
    drawerWidth?: number | string;
    breakpoints: any;
    typography: any;
    palette: {
        mode: 'dark' | 'light';
        primary: {
            main: string;
            contrastText: string;
        };
        secondary: {
            main: string;
        };
        gradient: {
            main: string;
            mainKeyframes: any;
        };
        divider: string;
        background: {
            default: string;
            paper: string;
        };
    };
    spacing: any;
    gradient?: any;
}

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#E06E0B',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f48fb1',
        },
        gradient: {
            main: 'linear-gradient(45deg,#e60cdf,#e6750c,#EED991,#EE92B1)',
            mainKeyframes: {
                '0%': {
                    backgroundPosition: '0% 50%',
                },
                '50%': {
                    backgroundPosition: '100% 50%',
                },
                '100%': {
                    backgroundPosition: '0% 50%',
                },
            }
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