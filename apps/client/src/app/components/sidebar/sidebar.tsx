import { useEffect, useState } from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab, selectTab } from '../../tools/redux/tabIndicator/tabSlice';
import { StyledTab } from '../styled/tab/styledTab';
import { StyledTabs } from '../styled/tabs/styledTabs';
import { StyledDrawer } from '../styled/drawer/styledDrawer';
import Logo from '../logo/logo';

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
        const router = useRouter();
        const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
            setTabIndex(newValue);
            dispatch(changeTab(newValue));
            setTimeout(() => {
                router.push(tabList[newValue].link);
            }, 100)
        };

        console.log(currentTab)

        // useEffect(() => {
        //     const path = router.pathname;
        //     const index = tabList.findIndex(tab => tab.link === path);
        //     setTabIndex(index);
        //     dispatch(changeTab(index));
        // },);

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