import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, ButtonProps } from '@mui/material';
import { CustomThemeOptions } from '../../../_assets/theme/darktheme';
import React from 'react';

interface StyledSideButtonProps extends ButtonProps {
    active?: boolean;
    listComponent?: React.ReactNode;
}

export const StyledSideButton = styled(({active, children, listComponent, ...props}: StyledSideButtonProps) => (
    <Button {...props}>
        {active && <span className="MuiButton-SideSpan" />}
        {(active && listComponent) && (() => {
            const theme = useTheme();

            return (
                <Box sx={{
                    position: 'absolute',
                    left: '100%',
                    bottom: 0,
                    zIndex: 1,
                    width: 'fit-content',
                    height: 'fit-content',
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    color: theme.palette.primary.contrastText,
                }}>
                    {listComponent}
                </Box>
            )
        })()}
        {children}
    </Button>
))(({ theme }: { theme: CustomThemeOptions}) => ({
    color: theme.palette.primary.contrastText,
    borderRadius: 0,
    position: 'relative',
    textTransform: 'none',
    '@keyframes heightTo100': {
        from: {
            height: '0%',
        },
        to: {
            height: '100%',
        },
    },
    '& .MuiButton-SideSpan': {
        position: 'absolute',
        width: '2px',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        zIndex: 0,
        borderRadius: 0,
        animation: 'heightTo100 0.1s ease-in',
    },
    '&:has(span.MuiButton-SideSpan)': {
        color: theme.palette.primary.main,
    },
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '&:not(:hover):not(:has(span.MuiButton-SideSpan)) .MuiSvgIcon-root': {
        opacity: 0.6,
        transition: 'opacity 0.2s ease-in-out',
    },
    '&:hover .MuiSvgIcon-root': {
        opacity: 1,
        transition: 'opacity 0.2s ease-in-out',
    },
}));