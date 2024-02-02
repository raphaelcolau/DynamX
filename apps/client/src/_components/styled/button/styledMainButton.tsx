'use client';
import React from 'react';
import { useTheme, Button } from '@mui/material';
import { CustomThemeOptions } from 'apps/client/src/_assets/theme/darktheme';


export default function StyledPrimayButton({
        children,
        href
    }:
    {
        children: React.ReactNode
        href?: string
    }) {
    const theme: CustomThemeOptions = useTheme();

    return (
        <Button
            variant="outlined"
            sx={{
                color: theme.palette.primary.contrastText,
                textTransform: 'none',
                boxSizing: 'border-box',
                borderRadius: '5px',
                backgroundColor: theme.palette.background.default,
                padding: {xs: '0.7rem 0.8rem', md: '0.3rem 0.5rem'},
                fontSize: {xs: '0.8rem', md: '0.9rem'},
                fontWeight: 500,
                position: 'relative',
                '&:hover': {
                    backgroundColor: theme.palette.background.paper,
                    outline: '1px solid transparent',
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    backgroundImage: theme.palette.gradient.main,
                    backgroundSize: '250% 250%',
                    borderRadius: '5px',
                    zIndex: '-1',
                    animation: 'gradient 5s ease infinite',
                    '@keyframes gradient': {
                        '0%': {
                            backgroundPosition: '0% 50%',
                            backgroundRotation: '0deg',
                        },
                        '50%': {
                            backgroundPosition: '99% 99%',
                            backgroundRotation: '180deg',
                        },
                        '100%': {
                            backgroundPosition: '0% 50%',
                            backgroundRotation: '360deg',
                        },
                    },
                },
                '&:hover::before': {
                    outline: '1px solid transparent',
                },
            }}
            href={href}
        >
            {children}
        </Button>
    );
}