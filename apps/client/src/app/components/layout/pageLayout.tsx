import { Box, useTheme } from '@mui/material';
import { ChildrenProp } from '../../types/types';
import Sidebar from '../sidebar/sidebar';
import { CustomThemeOptions } from '../../assets/theme/darktheme';

export default function PageLayout({ children }: ChildrenProp) {
    const theme: CustomThemeOptions = useTheme();

    return (
        <Box>
            <Sidebar />
            <Box sx={{
                marginLeft: theme.drawerWidth,
            }}>
                {children}
            </Box>
        </Box>
    );
}