import { useState } from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { StyledTab } from '../styled/tab/styledTab';
import { StyledTabs } from '../styled/tabs/styledTabs';
import Logo from '../logo/logo';
import { NextLinkComposed } from '../nextLink/nextLink';
import {useTranslations} from 'next-intl';


export default function SidebarItems() {
    const t = useTranslations('Sidebar');
    const tabList = [
        {label: 'home', icon: <Logo variant='vertical' />, link: '/'},
        {label: 'download', icon: <SystemUpdateAltIcon />, link: '/download'},
        {label: 'packs', icon: <FolderZipOutlinedIcon />, link: '/packs'},
        {label: 'addons', icon: <CodeOutlinedIcon />, link: '/addons'},
        {label: 'community', icon: <Diversity1OutlinedIcon />, link: '/community'},
        {label: 'documentation', icon: <DescriptionOutlinedIcon />, link: '/documentation'},
    ];
    const currentTab = (() => {
        if (typeof window === 'undefined') return 0;
        const path = window.location.pathname;
        const tab = tabList.find(tab => tab.link === path);
        if (tab) return tabList.indexOf(tab);
        else return 0;
    })();
    const [tabIndex, setTabIndex] = useState(currentTab);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };


    return (
        <StyledTabs
            orientation="vertical"
            value={tabIndex}
            onChange={handleTabChange}
            aria-label="DynamX pages"
        >
            {tabList.map((tab, index) => (
                <StyledTab
                    label={t(tab.label + '--label')}
                    icon={tab.icon}
                    key={index}
                    LinkComponent={NextLinkComposed}
                    to={tab.link}
                />
            ))}
        </StyledTabs>
    );
};
