import { useEffect, useState } from 'react';
import { Tabs, Tab, Box, CssBaseline, ThemeProvider, styled, StyledComponentProps } from '@mui/material';
import Image from 'next/image';
import { darktheme } from '../../assets/theme/darktheme';
import logo from '../../assets/images/icon.png';
import Link from 'next/link';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { ChildrenProp } from '../../types/types';
import { useRouter } from 'next/router';

function Sidebar() {
    const drawerWidth = 110;

    const StyledDrawer = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            height: '100vh',
            flexShrink: 0,
        },
        "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    }));


    const StyledTab = styled(Tab)(({ theme }) => ({
        height: drawerWidth,
        textTransform: 'none',
        minWidth: 0,
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.primary.contrastText,
        '& .Mui-selected': {
            color: theme.palette.primary.contrastText,
        },
        '& .MuiTab-wrapper': {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: theme.spacing(1),
        },
    }));


    const StyledTabs = styled(Tabs)(({ theme }) => ({
        '& .MuiTabs-indicator': {
            display: 'block',
            left: 0,
            width: '2px',
            backgroundColor: theme.palette.primary.main,
        },
    }));

    const Logo = () => {
        return (
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme => theme.spacing(0.9),
            }}>
                <Link href="/">
                    <Image 
                        src={logo}
                        alt="DynamX Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Link>
            </Box>
        );
    }



    const SidebarItem = () => {
        const tabList = [
            {label: 'Home', icon: <Logo />, link: '/'},
            {label: 'Download', icon: <SystemUpdateAltIcon />, link: '/download'},
            {label: 'Packs', icon: <FolderZipOutlinedIcon />, link: '/packs'},
            {label: 'Addons', icon: <CodeOutlinedIcon />, link: '/addons'},
            {label: 'Community', icon: <Diversity1OutlinedIcon />, link: '/community'},
            {label: 'Docs', icon: <DescriptionOutlinedIcon />, link: '/documentation'},
        ];
        const [pageIndex, setPageIndex] = useState(0);
        const router = useRouter();
        const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
            setPageIndex(newValue);
            router.push(tabList[newValue].link);
        };

        useEffect(() => {
            const path = router.pathname;
            const index = tabList.findIndex(tab => tab.link === path);
            setPageIndex(index);
        }, [router.pathname, tabList]);

        return (
            <StyledTabs
                orientation="vertical"
                value={pageIndex}
                onChange={handleTabChange}
                aria-label="DynamX pages"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                }}
            >
                {tabList.map((tab, index) => (
                    <StyledTab
                        label={tab.label}
                        icon={tab.icon}
                        key={index}
                    />
                ))}
            </StyledTabs>
        );
    };


    return (
        <Box>
            <StyledDrawer>
                <SidebarItem />
            </StyledDrawer>
        </Box>
    );
}

export default function PageLayout({ children }: ChildrenProp) {
    return (
        <ThemeProvider theme={darktheme}>
            <Box>
                <CssBaseline />
                <Sidebar />
                {children}
            </Box>
        </ThemeProvider>
    );
}