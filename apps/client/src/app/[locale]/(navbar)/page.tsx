'use client';
import { Box, Button, styled, useTheme } from "@mui/material";
import { motion, useScroll, scroll, useTransform, progress } from "framer-motion";
import X_svg from '../../../_assets/images/dynamx_X.svg';
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
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
    const scaleX = 50;
    const rotationX = 180;
    
    const logo = 'DYNAM';


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                fontFamily: 'LEIXO',
                position: 'relative',
            }}
            
            // onWheel={handleScroll}
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
                            rotate: rotationX * (scrollProgress / 100),
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
    const locale = useLocale();
    const [opacity, setOpacity] = useState(1);
    const step = 100; // progress in the animation per scroll event. 100 = 100% of the animation

    scroll(progress => {
        if (progress >= 1) return;
        else if (progress <= 0) return;

        if (progress <= 0.1) {
            setOpacity(1 - (progress * step));
        }
    })

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
                    href={`/${locale}/docs`}
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

function AnimatedVideoGrid() {
    const theme: CustomThemeOptions = useTheme();

    const VideoContainer = styled(Box)({
        borderRadius: '15px',
        backgroundColor: theme.palette.background.paper,
    });

    const videos = [
        {id: 'top-center', gridRow: '1 / 4', gridColumn: '4 / 6', video: ""},
        {id: 'top-right', gridRow: '2 / 4', gridColumn: '6 / 9', video: ""},
        {id: 'top-left', gridRow: '2 / 5', gridColumn: '2 / 4', video: ""},
        {id: 'center-center', gridRow: '4 / 7', gridColumn: '4 / 7', video: ""},
        {id: 'center-right', gridRow: '4 / 6', gridColumn: '7 / 9', video: ""},
        {id: 'center-left', gridRow: '5 / 7', gridColumn: '1 / 4', video: ""},
        {id: 'bottom-center', gridRow: '7 / 9', gridColumn: '5 / 7', video: ""},
        {id: 'bottom-right', gridRow: '6 / 8', gridColumn: '7 / 10', video: ""},
        {id: 'bottom-left', gridRow: '7 / 10', gridColumn: '3 / 5', video: ""},
    ]

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90vmin',
                height: '90vmin',
                display: 'grid',
                gridTemplateRows: 'repeat(9, 1fr)',
                gridTemplateColumns: 'repeat(9, 1fr)',
                gridAutoColumns: '1fr',
                gridAutoFlow: 'row',
                gridGap: {xs: '3px', md: '8px'},
            }}
        >
            {videos.map((video, index) => (
                <VideoContainer 
                    key={index}
                    id={video.id}
                    sx={{
                        gridRow: video.gridRow,
                        gridColumn: video.gridColumn,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                />
            ))}
        </Box>
    )
}

export default function Page() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '400vh',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
            }}
        >
            {/* <DynamXAnimated /> */}
            <AnimatedVideoGrid />
            <ScrollableIndicator />
        </Box>
    )
}