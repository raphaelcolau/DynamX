'use client';
import { Box } from "@mui/material";
import { motion, useAnimation, useScroll, scroll, useTransform } from "framer-motion";
import X_svg from '../../assets/images/dynamx_X.svg';
import Image from "next/image";
import { useEffect, useState } from "react";

// app/page.tsx is the UI for '/' route

function DynamXAnimated({until, ...props}: {until: number}) {
    const { scrollYProgress } = useScroll();
    const invertedScrollProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const [scrollProgress, setScrollProgress] = useState(0);


    const handleScroll = (e: any) => {
        const scrollDelta = e.deltaY;
        const progressDelta = scrollDelta > 0 ? step : (step * -1);
        const newScrollProgress = Math.min(100, Math.max(0, scrollProgress + progressDelta));
        setScrollProgress(newScrollProgress);
    };

    const duration = 0.5;
    const step = 10; // progress in the animation per scroll event. 100 = 100% of the animation
    
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
                        border: '1px solid white',
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
                                zIndex: 1000,
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
                            x: -logo.length * 50 * (scrollProgress / 100),
                            rotate: 90 * (scrollProgress / 100),
                            scale: 1 + (50 * (scrollProgress / 100)),
                            opacity: scrollProgress > 0.9 ? 0 : 1,
                        }}
                        transition={{ 
                            ease: 'easeOut',
                            duration: duration * logo.length,
                        }}
                    >
                        <Image
                            src={X_svg}
                            layout="fill"
                            objectFit="contain"
                            alt="DynamX X"
                            priority={true}
                        />
                    </motion.div>
                    
                </Box>

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
            <DynamXAnimated until={30}/>
        </Box>
    )
}