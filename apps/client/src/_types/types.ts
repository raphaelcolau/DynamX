import { ReactNode } from 'react';
import { StyledComponentProps } from '@mui/material';
import { UUID } from 'crypto';

export type ChildrenProp = {
    children: ReactNode;
};

export interface Partner {
    _id: string;
    shortname: string;
    title: string;
    description: string;
    logo: string;
    lang: "de" | "en" | "fr";
    link?: string;
    discord?: string;
}

export type linkProps = {
    title: string;
    url: string;
}

export type fileProps = {
    _id: UUID;
    game_version?: string;
    title: string;
    version: string;
    url: string;
    changelog?: string;
};

export type Content = {
    _id: UUID;
    title: string;
    logo?: string;
    shortname: string;
    description: string;
    images: string[];
    videos?: string[];
    tags?: string[];
    links: linkProps[];
    updatedAt: Date;
    files?: fileProps[];
}