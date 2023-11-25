import { Tab, styled } from '@mui/material';

export const StyledTab = styled(Tab)(({ theme }) => ({
    height: theme.drawerWidth,
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