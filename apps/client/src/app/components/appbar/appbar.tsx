import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, useTheme } from '@mui/material';
import { CustomThemeOptions } from '../../assets/theme/darktheme';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo/logo';
import Link from 'next/link';

interface AppBarProps {
    handleDrawerToggle?: () => void;
    isSkeleton?: boolean;
}

export default function AppBarComponent(props: AppBarProps) {
    const theme: CustomThemeOptions = useTheme();

    return (
        <AppBar 
            position={props.isSkeleton ? 'static' : 'fixed'}
            elevation={0}
            sx={{
                width: { sm: `calc(100% - ${theme.drawerWidth})`, xs: '100%'},
                marginLeft: { sm: theme.drawerWidth, xs: 0 },
                display: { sm: 'none', xs: 'block' },
                backgroundColor: theme.palette.background.default,
                borderBottom: `1px solid ${theme.palette.divider}`,
                paddingTop: theme.spacing(1),
                paddingBottom: theme.spacing(1),
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle ? props.handleDrawerToggle : () => {}}
                    sx={{
                        display: { sm: 'none' },
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <Logo variant='horizontal' size={15} />
                </Link>
            </Toolbar>
        </AppBar>
    )
}