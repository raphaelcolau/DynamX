import { Tab, styled } from '@mui/material';
import { CustomThemeOptions } from '../../../_assets/theme/darktheme'
import { TabProps } from '@mui/material/Tab';

interface StyledTabProps extends TabProps {
    to?: string | object;
}

const animationTransition = '0.1s ease-in-out';

export const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }: { theme: CustomThemeOptions}) => ({
    height: `calc(${theme.drawerWidth} * 0.95)`,
    textTransform: 'none',
    minWidth: 0,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.primary.contrastText,
    transition: 'opacity ' + animationTransition + ', color ' + animationTransition,
    '&.Mui-selected': {
        color: `${theme.palette.primary.main} !important`,
        opacity: 1,
    },
    '&:not(:has(div > img))': {
        opacity: 0.6,
        transition: 'opacity ' + animationTransition,
    },
    '&:not(:hover):has(div > img)': {
        color: `rgba(${(() => {
            const hex = theme.palette.primary.contrastText;
            const rgb = [
                parseInt(hex.substr(1, 2), 16),
                parseInt(hex.substr(3, 2), 16),
                parseInt(hex.substr(5, 2), 16)
            ];
            return rgb.join(', ');
        })()}, 0.6)`,
        transition: 'color ' + animationTransition,
    },
    '&:hover': {
        opacity: 1,
        transition: 'opacity ' + animationTransition,
    },
}));