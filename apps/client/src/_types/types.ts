import { ReactNode } from 'react';
import { StyledComponentProps } from '@mui/material';

export type ChildrenProp = {
    children: ReactNode;
};

export interface Partner {
    _id: string;
    shortname: string;
    title: string;
    description: string;
    logo: URL;
    lang: "de" | "en" | "fr";
    link?: URL;
    discord?: URL;
}