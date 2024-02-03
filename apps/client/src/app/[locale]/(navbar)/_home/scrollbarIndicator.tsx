'use client';
import { Box, Button, useTheme } from "@mui/material";
import { scroll} from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CustomThemeOptions } from "apps/client/src/_assets/theme/darktheme";
import { NextLinkComposed } from "apps/client/src/_components/nextLink/nextLink";

export default function ScrollableIndicator() {
    const t = useTranslations('ScrollableIndicator');
    const theme: CustomThemeOptions = useTheme();
    const locale = useLocale();
    const [opacity, setOpacity] = useState(1);
    const step = 100; // progress in the animation per scroll event. 100 = 100% of the animation

    useEffect(() => {
        scroll(progress => {
            if (progress >= 1) return;
            else if (progress <= 0) return;

            if (progress <= 0.1) {
                setOpacity(1 - (progress * step));
            }
        })
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '2vh',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'fit-content',
                height: 'fit-content',
                boxSizing: 'border-box',
                opacity: opacity,
                display: (opacity <= 0.05 ? 'none' : 'block')
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: {xs: '2.5vh', md: '4vh'},
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        color: theme.palette.primary.contrastText,
                        textTransform: 'none',
                        boxSizing: 'border-box',
                        borderRadius: '5px',
                        backgroundColor: theme.palette.background.default,
                        padding: {xs: '0.7rem 0.8rem', md: '0.7rem 1.2rem'},
                        fontSize: {xs: '0.8rem', md: '1.1rem'},
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
                    LinkComponent={NextLinkComposed}
                    href={`/${locale}/documentation`}
                >
                    {t('discover--btn')}
                </Button>

                <Box
                    sx={{
                        width: {xs: '2px', md: '4px'},
                        height: {xs: '35px', md: '50px'},
                        borderRadius: '4px',
                        background: 'linear-gradient( 0deg, #b1b1b1, #707070, #b1b1b1, #707070, #b1b1b1)',
                        backgroundSize: '100% 200%',
                        backgroundRepeat: 'repeat-y',
                        backgroundPosition: '0% 0%',
                        animation: 'scroll 2s linear infinite',
                        '@keyframes scroll': {
                            '0%': {
                                backgroundPosition: '0% 0%',
                            },
                            '100%': {
                                backgroundPosition: '0% -200%',
                            },
                        },
                    }}
                />

            </Box>
        </Box>
    )
}