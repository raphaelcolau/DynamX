import { ReactNode } from 'react';
import { StyledComponentProps } from '@mui/material';

export type ChildrenProp = {
    children: ReactNode;
};

export type StyledTabsProps = StyledComponentProps<'div'> & {
    children?: React.ReactNode;
    value?: number;
    onChange?: (event: React.SyntheticEvent, newValue: number) => void;
    orientation?: 'horizontal' | 'vertical' | undefined;
    variant?: 'standard' | 'scrollable' | 'fullWidth' | undefined;
    indicatorColor?: 'secondary' | 'primary' | undefined;
    textColor?: 'secondary' | 'primary' | 'inherit' | undefined;
    centered?: boolean | undefined;
    ariaLabel?: string;
    sx?: any;
};