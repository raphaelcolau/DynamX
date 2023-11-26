import { Box } from '@mui/material';
import { ChildrenProp } from '../../types/types';
import Sidebar from '../sidebar/sidebar';

export default function PageLayout({ children}: ChildrenProp) {
    return (
        <Box>
            <Sidebar />
            <Box>
                {children}
            </Box>
        </Box>
    );
}