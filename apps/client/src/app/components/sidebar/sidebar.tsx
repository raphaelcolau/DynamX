import { StyledDrawer } from '../styled/drawer/styledDrawer';
import { styled, useTheme } from '@mui/material/styles';
import SidebarItems from './sidebarItems';
import { Box, Button, ButtonProps } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CustomThemeOptions } from '../../assets/theme/darktheme';
import React, { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SiDiscord } from '@icons-pack/react-simple-icons';

export default function Sidebar() {
    const theme = useTheme();

    interface StyledSideButtonProps extends ButtonProps {
        active?: boolean;
        listComponent?: React.ReactNode;
    }

    const StyledSideButton = styled(({active, children, listComponent, ...props}: StyledSideButtonProps) => (
        <Button {...props}>
            {active && <span className="MuiButton-SideSpan" />}
            {(active && listComponent) &&
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
            }
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

    const BottomButtons = () => {
        const [activeButton, setActiveButton] = useState(true);
        const [activeButton, setActiveButton] = useState(false);
        const sideButtonRef = useRef<HTMLButtonElement>(null);

        type Link = {
            name: string;
            link: string;
            icon?: React.ReactNode;
        }

        //close the button when clicking outside of it
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
                    ref={sideButtonRef}
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