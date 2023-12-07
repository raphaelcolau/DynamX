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
    
    const logo = 'DYNAM';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '400vh',
                fontFamily: 'LEIXO',
                position: 'relative',
            }}
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
                    }}
                >

                    {logo.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            style={{
                                display: 'inline-block',
                                fontSize: '10rem',
                                opacity: 1,
                                position: 'absolute',
                                left: `${index * 6.5}rem`,
                                zIndex: 1000,
                            }}
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: -index * 50, opacity: 1 }} 
                            transition={{ ease: 'easeOut', duration: 0.5 * index }}
                        >
                            {letter}
                        </motion.span>
                    ))}

                    
                    <Image
                        src={X_svg}
                        width={220}
                        height={220}
                        alt="DynamX X"
                        priority={true}
                        style={{
                            transform: 'translateY(5%)',
                            marginLeft: `${(logo.length - 1) * 6.5}rem`,
                            zIndex: -1,
                        }}
                    />
                    
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