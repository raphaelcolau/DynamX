import { Box, Button, } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SiDiscord } from '@icons-pack/react-simple-icons';
import { SiPaypal } from '@icons-pack/react-simple-icons';
import { StyledSideButton } from '../styled/button/styledSideButton';
import { StyledMenu } from '../styled/menu/styledMenu';
import { useTheme } from '@mui/material/styles';

export default function BottomButtons() {
    const [activeButton, setActiveButton] = useState(false);
    const [anchorBtn, setAnchorBtn] = useState<null | HTMLElement>(null);
    const theme = useTheme();

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

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setActiveButton(true);
        setAnchorBtn(event.currentTarget);
    }

    const handleClose = () => {
        setActiveButton(false);
        setAnchorBtn(null);
    }

    const moreLink: Link[] = [
        {name: 'Discord', link: 'https://discord.gg/NS8B6wv', icon: <SiDiscord size={33} />},
        {name: 'Youtube', link: 'https://www.youtube.com/@dynamxteam6689', icon: <YouTubeIcon fontSize='large' />},
        {name: 'Github', link: 'https://github.com/DynamXInc', icon: <GitHubIcon fontSize='large' />},
        {name: 'Paypal', link: 'https://www.paypal.com/paypalme/dynamxinc', icon: <SiPaypal size={31} />},
    ]

    return (
        <Box>
            <StyledSideButton
                fullWidth
                active={activeButton}
                onClick={handleOpen}
            >
                <MoreHorizIcon />
            </StyledSideButton>

            <StyledMenu
                anchorEl={anchorBtn}
                open={activeButton}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                elevation={0}
            >
                {moreLink.map((element: Link, index) => (
                    <Button
                        key={index}
                        fullWidth
                        href={element.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        variant="text"
                        sx={{
                            paddingLeft: theme.spacing(3),
                            paddingRight: theme.spacing(3),
                            paddingTop: theme.spacing(2),
                            paddingBottom: theme.spacing(2),
                            opacity: 0.7,
                            borderRadius: 0,
                            backgroundColor: theme.palette.background.default,
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
            </StyledMenu>

        </Box>
    );
}