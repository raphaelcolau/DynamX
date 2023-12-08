'use client';
import { Box, Button, useTheme } from "@mui/material";
import { motion, useScroll, scroll, useTransform } from "framer-motion";
import X_svg from '../../../_assets/images/dynamx_X.svg';
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CustomThemeOptions } from "apps/client/src/_assets/theme/darktheme";
import { NextLinkComposed } from "apps/client/src/_components/nextLink/nextLink";

// app/page.tsx is the UI for '/' route

function XBackgroundAnimated() {
    const theme: CustomThemeOptions = useTheme();
    
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                background: theme.palette.gradient.main,
                backgroundSize: '200% 200%',
                maskImage: `url(${X_svg.src})`,
                maskSize: '100% 100%',
                animation: 'gradient 10s ease infinite',
                '@keyframes gradient': theme.palette.gradient.mainKeyframes,
            }}
        />
    )
}

function DynamXAnimated() {
    const { scrollYProgress } = useScroll();
    const invertedScrollProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [oldDeltaY, setOldDeltaY] = useState(0);


    const handleScroll = (e: any) => {
        const scrollDelta = e.deltaY;
        const progressDelta = scrollDelta > 0 ? step : (step * -1);
        const newScrollProgress = Math.min(100, Math.max(0, scrollProgress + progressDelta));
        setScrollProgress(newScrollProgress);
    };

    scroll(deltaY => {
        const progressDelta = deltaY > oldDeltaY ? step : (step * -1);
        const newScrollProgress = Math.min(100, Math.max(0, scrollProgress + progressDelta));
        setScrollProgress(newScrollProgress);
    });

    const duration = 0.5;
    const step = 100; // progress in the animation per scroll event. 100 = 100% of the animation
    const scaleX = 10;
    
    const logo = 'DYNAM';


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '110vh',
                fontFamily: 'LEIXO',
                position: 'relative',
            }}
            
            onWheel={handleScroll}
        >
            <Box
                style={{
                    position: 'fixed',
                    top: '48vh',
                    transform: 'translateY(-50%)',
                    userSelect: 'none',
                }}
            >

                <Box
                    style={{
                        position: 'relative',
                        width: 'fit-content',
                        height: 'fit-content',
                        paddingRight: 'calc(15vw * 0.8)',
                    }}
                >

                    {logo.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            style={{
                                display: 'inline-block',
                                fontSize: '15vw',
                                letterSpacing: '-0.5vw',
                                opacity: 1,
                            }}
                            initial={{ x: 0, opacity: 1 }}
                            animate={{ 
                                x: `calc(-${index * 100}% * ${scrollProgress / 100})`,
                                opacity: ((index / logo.length) + 1) - ((scrollProgress / 100) + (index / logo.length)),
                            }} 
                            transition={{ 
                                ease: 'easeOut',
                                duration: (duration * index > 0 ? duration * index : 1),
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}

                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '0',
                            zIndex: -1,
                            width: 'calc(15vw * 1.2)',
                            height: 'calc(15vw * 1.2)',
                        }}
                        initial={{x: 0, rotate: 0, scale: 1}}

                        animate={{
                            x: `calc(calc(20vw * -1) * ${scrollProgress / 100})`,
                            rotate: 90 * (scrollProgress / 100),
                            scale: 1 + (scaleX * (scrollProgress / 100)),
                            opacity: scrollProgress >= 90 ? 1 : 1,
                        }}
                        transition={{ 
                            ease: 'easeOut',
                            duration: duration * logo.length,
                        }}
                    >
                        <XBackgroundAnimated />
                    </motion.div>
                    
                </Box>

            </Box>
        </Box>
    )
}


function ScrollableIndicator() {
    const t = useTranslations('ScrollableIndicator');
    const theme: CustomThemeOptions = useTheme();

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
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '4vh',
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        color: theme.palette.primary.contrastText,
                        textTransform: 'none',
                        boxSizing: 'border-box',
                        borderImage: `${theme.palette.gradient.main} 1`,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '5px',
                        padding: '0.7rem 1.2rem',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        "&:hover": {
                            borderImage: `${theme.palette.gradient.main} 1`,
                        },
                    }}
                    LinkComponent={NextLinkComposed}
                    href='/docs'
                >
                    {t('discover--btn')}
                </Button>

                <Box
                    sx={{
                        width: '4px',
                        height: '50px',
                        borderRadius: '4px',
                        background: 'linear-gradient( 0deg, #555578, #707070, #555578, #707070, #555578)',
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

export default function Page() {
    return (
        <Box
            sx={{
                width: '100vw',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
            }}
        >
            <DynamXAnimated />
            <ScrollableIndicator />
        </Box>
    )
}