'use client';
import React, { useState } from 'react';
import { Box, Hidden, useTheme } from '@mui/material';
import { ChildrenProp } from '../../types/types';
import Sidebar from '../sidebar/sidebar';
import { CustomThemeOptions } from '../../assets/theme/darktheme';
import AppBarComponent from '../appbar/appbar';

export default function PageLayout({ children }: ChildrenProp) {
    const theme: CustomThemeOptions = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <AppBarComponent
                handleDrawerToggle={handleDrawerToggle}
                isSkeleton={false}
            />

            {/*
                SIDEBAR Component:
                This component is responsible for rendering the sidebar.
                The temporary variant is only visible on mobile devices.
                The permanent variant is only visible on desktop devices.

                Hidden is a component that hides its children based on the screen size.
                'css' works better for server-side rendering.
            */}
            <Box
                component="nav"
                sx={{ 
                    flexShrink: { sm: 0 },
                    overflow: { sm: 'hidden' },
                }}
                aria-label="navbars"
            >
                <Hidden smUp implementation="css"> {/* This is a sidebar that is only visible on mobile devices */}
                    <Sidebar
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{ display: { sm: 'none', xs: 'block' } }}
                    />
                </Hidden>

                <Hidden xsDown implementation="css"> {/* This is a sidebar that is only visible on desktop devices */}
                    <Sidebar
                        variant="permanent"
                        open={true}
                        sx={{ display: { sm: 'block', xs: 'none' }}}
                    />
                </Hidden>
            </Box>


            <Box component="main" sx={{ 
                flexGrow: 1,
                width: { sm: `calc(100% - ${theme.drawerWidth})`},
                overflow: 'hidden'
            }}>
                <AppBarComponent isSkeleton={true} /> {/* This is a skeleton appbar that is only visible on mobile devices */}
                {children}
            </Box>
        </Box>
    );
}