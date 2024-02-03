//Definition: Presents the packs page

import { Box } from "@mui/material";
import { Content } from "apps/client/src/_types/types";
import { randomUUID } from "crypto";
import ContentManager from "../../../../_components/content/contentManager";

export default function Page() {
    const content: Content[] = [
        {
            _id: randomUUID(),
            title: 'DynamX Basic Addons',
            description: 'Keys, Fuel consomption, car blinker and more',
            shortname: 'dnxbasic',
            tags: ['qol', 'technic', 'tools', 'graphic'],
            images: [
                "https://dynamx.fr/img/addons/619ffa207495b0fd666a58ff/image0.png"
            ],
            updatedAt: new Date('2023-09-18'),
            links: [{
                title: 'DynamX',
                url: 'https://dynamx.fr/download/addons/619ffa207495b0fd666a58ff/BasicsAddon-1.0.8-for-DynamX-4.0.1.jar'
            }],
            files: [
                {
                    _id: randomUUID(),
                    game_version: 'DynamX 4.0.1',
                    title: 'DynamX Basic Addons 4',
                    version: '4.0',
                    url: 'https://dynamx.fr/download/addons/619ffa207495b0fd666a58ff/BasicsAddon-1.0.8-for-DynamX-4.0.1.jar',
                    changelog: 'Updated for DynamX 4.0.1',
                },
                {
                    _id: randomUUID(),
                    game_version: 'DynamX 3.3',
                    title: 'DynamX Basic Pack 3.0',
                    version: '3.0',
                    url: 'https://dynamx.fr/download/addons/619ffa207495b0fd666a58ff/BasicsAddon-1.0.1-for-DynamX-3.3.jar',
                    changelog: 'Initial release',
                }
            ]
        }
    ];

    return (
        <Box
            sx={{
                minHeight: '100%',
                width: '100%',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <ContentManager content={content} />

        </Box>
    )
}