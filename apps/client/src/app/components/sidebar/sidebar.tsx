import { StyledDrawer } from '../styled/drawer/styledDrawer';
import { useTheme } from '@mui/material/styles';
import SidebarItems from './sidebarItems';
import React from 'react';
import BottomButtons from './bottomButtons';

export default function Sidebar(props: any) {
    const theme = useTheme();    

    return (
        <StyledDrawer 
            {...props}
        >
            <SidebarItems />
            <BottomButtons />
        </StyledDrawer>
    );
}