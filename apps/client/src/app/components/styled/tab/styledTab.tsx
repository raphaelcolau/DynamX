import { Tab, styled } from '@mui/material';
import { CustomThemeOptions } from '../../../assets/theme/darktheme'
import { TabProps } from '@mui/material/Tab';

interface StyledTabProps extends TabProps {
    to?: string | object;
}

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }: { theme: CustomThemeOptions}) => ({
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