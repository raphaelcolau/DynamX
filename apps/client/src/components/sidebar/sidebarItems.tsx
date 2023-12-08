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
import {useTranslations, useLocale} from 'next-intl';


export default function SidebarItems() {
    const locale = useLocale();

    const t = useTranslations('Sidebar');
    const tabList = [
        {label: t('home--label'), icon: <Logo variant='vertical' />, link: `/${locale}/`},
        {label: t('download--label'), icon: <SystemUpdateAltIcon />, link: `/${locale}/download`},
        {label: t('packs--label'), icon: <FolderZipOutlinedIcon />, link: `/${locale}/packs`},
        {label: t('addons--label'), icon: <CodeOutlinedIcon />, link: `/${locale}/addons`},
        {label: t('community--label'), icon: <Diversity1OutlinedIcon />, link: `/${locale}/community`},
        {label: t('documentation--label'), icon: <DescriptionOutlinedIcon />, link: `/${locale}/documentation`},
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
                    label={tab.label}
                    icon={tab.icon}
                    key={index}
                    LinkComponent={NextLinkComposed}
                    to={tab.link}
                />
            ))}
        </StyledTabs>
    );
};
