import { useState } from 'react';
import { Tabs, Tab, Box, CssBaseline, ThemeProvider, styled, StyledComponentProps } from '@mui/material';
import Image from 'next/image';
import { darktheme } from '../../assets/theme/darktheme';
import logo from '../../assets/images/icon.png';
import Link from 'next/link';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { ChildrenProp, StyledTabsProps } from '../../types/types';


function Sidebar() {
    const drawerWidth = 110;
    const [pageIndex, setPageIndex] = useState(0);

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
        '& .Mui-selected': {
            color: theme.palette.primary.main,
        },
    }));

    

    const StyledTabs = styled((props: StyledTabsProps) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    ))(({ theme }) => ({
        '& .MuiTabs-indicator': {
            display: "flex",
            justifyContent: "center",
            height: "fit-content",
            backgroundColor: "transparent",
        },
        '& .MuiTabs-indicatorSpan': {
            backgroundColor: theme.palette.primary.main,
            height: "3px",
            maxWidth: "44px",
            width: "50%",
            borderRadius: "3px 3px 0 0",
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

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setPageIndex(newValue);
    };

    const SidebarItem = () => {
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
                <StyledTab icon={<Logo />} label="Home" />
                <StyledTab icon={<SystemUpdateAltIcon />} label="Download" />
                <StyledTab icon={<FolderZipOutlinedIcon />} label="Packs" />
                <StyledTab icon={<CodeOutlinedIcon />} label="Addons" />
                <StyledTab icon={<DescriptionOutlinedIcon />} label="Docs" />
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