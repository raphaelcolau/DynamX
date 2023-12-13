'use client';
import { Box, styled } from "@mui/material";
import { motion, scroll} from "framer-motion";
import React, { useState } from "react";

const VideoContainer = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#424242',
});

const Video = React.memo(({ video, progress, duration }: { video: any, progress: number, duration: number }) => (
    <VideoContainer 
        id={video.id}
        sx={{
            borderRadius: {xs: '5px', md: '15px'},
            gridRow: video.gridRow,
            gridColumn: video.gridColumn,
            userSelect: 'none',
        }}
    >
        <motion.video
            style={{
                width: '150%',
                height: '150%',
                userSelect: 'none',
            }}
            autoPlay
            loop
            muted
            playsInline
            disableRemotePlayback
            initial={{rotate: 0}}
            animate={{rotate: progress * -180}}
            transition={{ease: 'linear', duration: duration}}
        >
            <source src={video.video} type="video/webm" />
        </motion.video>
    </VideoContainer>
));

export default function AnimatedVideoGrid() {
    const duration = 1;
    const minScroll = 0.03;
    const maxScroll = 0.46;
    const videos = [
        {id: 'top-center', gridRow: '1 / 4', gridColumn: '4 / 6', video:    'videos/boat.webm'},
        {id: 'top-right', gridRow: '2 / 4', gridColumn: '6 / 9', video:     'videos/police.webm'},
        {id: 'top-left', gridRow: '2 / 5', gridColumn: '2 / 4', video:      'videos/kart.webm'},
        {id: 'center-center', gridRow: '4 / 7', gridColumn: '4 / 7', video: 'videos/ragdoll.webm'},
        {id: 'center-right', gridRow: '4 / 6', gridColumn: '7 / 9', video:  'videos/truck.webm'},
        {id: 'center-left', gridRow: '5 / 7', gridColumn: '1 / 4', video:   'videos/green.webm'},
        {id: 'bottom-center', gridRow: '7 / 9', gridColumn: '5 / 7', video: 'videos/dir.webm'},
        {id: 'bottom-right', gridRow: '6 / 8', gridColumn: '7 / 10', video: 'videos/ambulance.webm'},
        {id: 'bottom-left', gridRow: '7 / 10', gridColumn: '3 / 5', video:  'videos/garbage.webm'},
    ]
    const [rotationProgress, setRotationProgress] = useState(0);
    const [scaleProgress, setScaleProgress] = useState(0);
    const [opacity, setOpacity] = useState(1);

    scroll(deltaY => {
        if (deltaY < minScroll) {
            setScaleProgress(deltaY / minScroll);
            setRotationProgress(0);
            setOpacity(1);
        } else if ((deltaY > minScroll) && (deltaY < maxScroll)) {
            const progress: number = (deltaY - minScroll) / (maxScroll - minScroll);
            const newRotationProgress = Math.round((progress + Number.EPSILON) * 100) / 100;
            setScaleProgress(1 + (progress * 0.2));
            setRotationProgress(newRotationProgress);
            setOpacity(1);
        } else {
            setRotationProgress(1);
            setOpacity(0);
        }
    });

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'transparent',
                opacity: opacity,
                transition: 'opacity 0.5s linear',
            }}
        >
                <motion.div
                    style={{
                        width: '90vmin',
                        height: '90vmin',
                        display: 'grid',
                        gridTemplateRows: 'repeat(9, 1fr)',
                        gridTemplateColumns: 'repeat(9, 1fr)',
                        gridAutoColumns: '1fr',
                        gridAutoFlow: 'row',
                        gridGap: '8px',
                    }}
                    initial={{scale: 0, rotate: 0, opacity: 0}}
                    animate={{scale:  scaleProgress, rotate: rotationProgress * 180, opacity: scaleProgress}}
                    transition={{ease: 'linear', duration: duration }}
                >
                    {videos.map((video, index) => (
                        <Video key={index} video={video} duration={duration} progress={rotationProgress} />
                    ))}
                </motion.div>
        </Box>
    )
}