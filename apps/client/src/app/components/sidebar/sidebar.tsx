import { useState } from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab, selectTab } from '../../tools/redux/tabIndicator/tabSlice';
import { StyledTab } from '../styled/tab/styledTab';
import { StyledTabs } from '../styled/tabs/styledTabs';
import { StyledDrawer } from '../styled/drawer/styledDrawer';
import Logo from '../logo/logo';
import { NextLinkComposed } from '../nextLink/nextLink';

export default function Sidebar() {

    const SidebarItem = () => {
        const tabList = [
            {label: 'Home', icon: <Logo />, link: '/'},
            {label: 'Download', icon: <SystemUpdateAltIcon />, link: '/download'},
            {label: 'Packs', icon: <FolderZipOutlinedIcon />, link: '/packs'},
            {label: 'Addons', icon: <CodeOutlinedIcon />, link: '/addons'},
            {label: 'Community', icon: <Diversity1OutlinedIcon />, link: '/community'},
            {label: 'Docs', icon: <DescriptionOutlinedIcon />, link: '/documentation'},
        ];
        const currentTab = useSelector(selectTab);
        const dispatch = useDispatch();
        const [tabIndex, setTabIndex] = useState(currentTab);
        const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
            setTabIndex(newValue);
            dispatch(changeTab(newValue));
        };


        return (
            <StyledTabs
                orientation="vertical"
                value={tabIndex}
                onChange={handleTabChange}
                aria-label="DynamX pages"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                }}
            >
                {tabList.map((tab, index) => (
                    <StyledTab
                        label={tab.label}
                        icon={tab.icon}
                        key={index}
                        LinkComponent={NextLinkComposed}
                        to={{
                            pathname: tab.link,
                        }}
                    />
                ))}
            </StyledTabs>
        );
    };

    return (
        <StyledDrawer>
            <SidebarItem />
        </StyledDrawer>
    );
}