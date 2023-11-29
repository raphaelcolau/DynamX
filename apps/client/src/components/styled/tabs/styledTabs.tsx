import { Tabs, styled } from '@mui/material';

export const StyledTabs = styled(Tabs)(({ theme }) => ({
    '& .MuiTabs-indicator': {
        display: 'block',
        left: 0,
        width: '2px',
        backgroundColor: theme.palette.primary.main,
    },
}));