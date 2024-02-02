'use client';
import { Content } from 'apps/client/src/_types/types';
import React, {useState} from 'react';
import ContentGrid from "apps/client/src/_components/content/contentGrid";
import SearchInput from "apps/client/src/_components/content/searchbar";
import TagsBar from "apps/client/src/_components/content/tagsbar";

export default function ContentManager({content}: {content: Content[]}) {
    const [localContent, setLocalContent] = useState(content);
    const tags = localContent.map(pack => pack.tags).flat().filter((value, index, self) => self.indexOf(value) === index);

    const handleSearch = (search: string) => {
        setLocalContent(content.filter(pack => pack.title.toLowerCase().includes(search.toLowerCase())));
    };

    const handleSearchByTags = (tags: string[]) => {
        setLocalContent(content.filter(pack => pack.tags && tags.every(tag => (pack.tags ?? []).includes(tag))));
    };

    return (
        <>
            <SearchInput handleSearch={handleSearch} />

            <TagsBar tags={tags} handleSearch={handleSearchByTags} />

            <ContentGrid content={localContent} />
        </>
    )
}