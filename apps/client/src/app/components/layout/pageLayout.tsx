import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, useTheme } from '@mui/material';
import { ChildrenProp } from '../../types/types';
import Sidebar from '../sidebar/sidebar';
import { CustomThemeOptions } from '../../assets/theme/darktheme';
import MenuIcon from '@mui/icons-material/Menu';

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
            {/* <Sidebar />
            <Box sx={{
                marginLeft: theme.drawerWidth,
                [theme.breakpoints.down('sm')]: {
                    marginLeft: 0,
                },
            }}>
                {children}
            </Box> */}

            <AppBar position="fixed" sx={{
                width: { sm: `calc(100% - ${theme.drawerWidth})`, xs: '100%'},
                marginLeft: { sm: theme.drawerWidth, xs: 0 },
                display: { sm: 'none', xs: 'block' },
            }}>

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { sm: 'none' },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    DynamX
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ 
                    width: theme.drawerWidth,
                    flexShrink: { sm: 0 },
                    overflow: { sm: 'hidden' },
                }}
                aria-label="navbars"
            >
                <Sidebar
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{ display: { sm: 'none', xs: 'block' } }}
                />

                <Sidebar
                    variant="permanent"
                    open={true}
                    sx={{ display: { sm: 'block', xs: 'none' }}}
                />

            </Box>

            <Box component="main" sx={{ 
                flexGrow: 1,
                width: { sm: `calc(100% - ${theme.drawerWidth})`},
            }}>
                {children}
            </Box>
        </Box>
    );
}