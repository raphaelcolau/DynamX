import { StyledDrawer } from '../styled/drawer/styledDrawer';
import { useTheme } from '@mui/material/styles';
import SidebarItems from './sidebarItems';
import { Box, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SiDiscord } from '@icons-pack/react-simple-icons';
import { StyledSideButton } from '../styled/button/styledSideButton';

export default function Sidebar() {
    const theme = useTheme();

    const BottomButtons = () => {
        const [activeButton, setActiveButton] = useState(false);

        type Link = {
            name: string;
            link: string;
            icon?: React.ReactNode;
        }

        useEffect(() => {
            const handleClickOutside = (event: any) => {
                if (activeButton && !event.target.closest('.MuiButton-SideSpan') && !event.target.closest('.MuiButton-root')) {
                    setActiveButton(false);
                }
            }
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            }
        }, [activeButton]);

        const moreLink: Link[] = [
            {name: 'Discord', link: 'https://discord.gg/NS8B6wv', icon: <SiDiscord size={33} />},
            {name: 'Youtube', link: 'https://www.youtube.com/@dynamxteam6689', icon: <YouTubeIcon fontSize='large' />},
            {name: 'Github', link: 'https://github.com/DynamXInc', icon: <GitHubIcon fontSize='large' />}
        ]

        return (
            <Box>
                <StyledSideButton
                    fullWidth
                    active={activeButton}
                    onClick={() => setActiveButton(!activeButton)}
                    listComponent={
                        <Box>
                            {moreLink.map((element: Link, index) => (
                                <Button
                                    key={index}
                                    fullWidth
                                    href={element.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    sx={{
                                        paddingLeft: theme.spacing(3),
                                        paddingRight: theme.spacing(3),
                                        paddingTop: theme.spacing(2),
                                        paddingBottom: theme.spacing(2),
                                        opacity: 0.7,
                                        transition: 'opacity 0.2s ease-in-out',
                                        '&:hover': {
                                            opacity: 1,
                                            transition: 'opacity 0.2s ease-in-out',
                                        } 
                                    }}
                                >
                                    {element.icon ? element.icon : element.name}
                                </Button>
                            )
                            )}
                        </Box>
                    }
                >
                    <MoreHorizIcon />
                </StyledSideButton>


            </Box>
        );
    
    }

    return (
        <StyledDrawer sx={{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <SidebarItems />
            <BottomButtons />
        </StyledDrawer>
    );
}