import { StyledDrawer } from '../styled/drawer/styledDrawer';
import { styled, useTheme } from '@mui/material/styles';
import SidebarItems from './sidebarItems';
import { Box, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { CustomThemeOptions } from '../../assets/theme/darktheme';

export default function Sidebar() {
    const theme = useTheme();

    const StyledSideButton = styled(Button)(({ theme }: { theme: CustomThemeOptions}) => ({
        width: theme.drawerWidth,
        marginTop: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        borderRadius: 0,
        '&:hover .MuiSvgIcon-root': {
            scale: 2,
        },
    }));

    const BottomButtons = () => {

        return (
            <Box>
                <StyledSideButton>
                    <MoreHorizIcon />
                </StyledSideButton>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        width: '100%',
                        marginTop: theme.spacing(2),
                    }}
                >
                    Register
                </Button>
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