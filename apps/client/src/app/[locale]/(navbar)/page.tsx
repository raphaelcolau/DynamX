import { Box } from "@mui/material";
import React from "react";
import AnimatedPartner from "./_home/partner";
import DynamXAnimated from "./_home/animatedLogo";
import ScrollableIndicator from "./_home/scrollbarIndicator";
import AnimatedVideoGrid from "./_home/AnimatedVideo";

// app/page.tsx is the UI for '/' route

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
            <DynamXAnimated />
            <ScrollableIndicator />
            <AnimatedVideoGrid />
            <AnimatedPartner />
        </Box>
    )
}