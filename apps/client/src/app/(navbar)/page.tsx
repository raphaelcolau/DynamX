'use client';
import { Box } from "@mui/material";
import { motion, useAnimation, useScroll, scroll, useTransform } from "framer-motion";
import X_svg from '../../assets/images/dynamx_X.svg';
import Image from "next/image";
import { useEffect, useState } from "react";

// app/page.tsx is the UI for '/' route

function DynamXAnimated({until, ...props}: {until: number}) {
    const [animPercent, setAnimPercent] = useState(0);
    const { scrollYProgress } = useScroll();
    const invertedScrollProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
    
    const logo = 'DYNAM';
    console.log(invertedScrollProgress)

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
            <motion.div
                style={{
                    position: 'fixed',
                    top: '50vh',
                    transform: 'translateY(-50%)',
                }}
            >
                {logo.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        style={{
                            display: 'inline-block',
                            fontSize: '10rem',
                            opacity: invertedScrollProgress,
                            marginLeft: '-0.3rem',
                        }}
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
                        transform: 'translateY(25%)',
                        marginLeft: '-5rem',
                    }}
                />
            </motion.div>
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