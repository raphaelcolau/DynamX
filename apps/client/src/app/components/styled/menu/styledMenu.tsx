import { Menu } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMenu = styled(Menu)(({ theme }) => ({
    '& > .MuiPaper-root': {
        borderRadius: 0,
        marginTop: theme.spacing(1),
        width: '90px',
        color: theme.palette.text.primary,
        boxShadow: 'none',
        border: `1px solid ${theme.palette.divider}`,
        '& .MuiList-padding': {
            paddingTop: 0,
            paddingBottom: 0,
        },
    },
}));