'use client';
import { useTheme } from "@mui/material";
import { CustomThemeOptions } from "../../_assets/theme/darktheme";
import { StyledSideButton } from '../styled/button/styledSideButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Theme } from "@mui/material/styles";

export default function SideButton({ activeButton, handleOpen }: {activeButton: boolean, handleOpen: (event: React.MouseEvent<HTMLElement>) => void }) {
    const theme: CustomThemeOptions = useTheme();

    return (
        <StyledSideButton
                fullWidth
                active={activeButton}
                onClick={handleOpen}
                theme={theme as Theme & CustomThemeOptions}
            >
                <MoreHorizIcon />
        </StyledSideButton>
    )
}