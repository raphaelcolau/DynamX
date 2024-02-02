//Definition: Presents the packs page

import { Box } from "@mui/material";
import { Content } from "apps/client/src/_types/types";
import { randomUUID } from "crypto";
import ContentManager from "./contentManager";

export default function Page() {
    const content: Content[] = [
        {
            _id: randomUUID(),
            title: 'DynamX Basic Pack',
            description: 'Basic pack with the most essential features',
            shortname: 'dnxbasic',
            tags: ['armor', 'vehicle', 'props', 'blocks', 'contemporary', 'medieval'],
            images: [
                "https://dynamx.fr/img/packs/6127730fbd08ee57b1f3e97d/image0.png"
            ],
            updatedAt: new Date('2023-09-18'),
            links: [{
                title: 'DynamX',
                url: 'https://dynamx.fr/download/packs/6127730fbd08ee57b1f3e97d/DartcherDynamX-BasicPack-4.0.dnxpack'
            }],
            files: [
                {
                    _id: randomUUID(),
                    game_version: 'DynamX >= 4.0',
                    title: 'DynamX Basic Pack 4.0',
                    version: '4.0',
                    url: 'https://dynamx.fr/download/packs/6127730fbd08ee57b1f3e97d/DartcherDynamX-BasicPack-4.0.dnxpack',
                    changelog: 'Updated for DynamX 4.0',
                },
                {
                    _id: randomUUID(),
                    game_version: 'DynamX <= 3.3',
                    title: 'DynamX Basic Pack 3.0',
                    version: '3.0',
                    url: 'https://dynamx.fr/download/packs/6127730fbd08ee57b1f3e97d/DartcherDynamX-BasicPack.dnxpack',
                    changelog: 'Initial release',
                }
            ]
        },
        {
            _id: randomUUID(),
            title: 'Kab Classic',
            description: "Kab's free models",
            shortname: 'kabclassic',
            tags: ['armor', 'vehicle', 'contemporary'],
            images: [
                "https://dynamx.fr/img/packs/618ae6c6698ff350f0cc5312/image0.png"
            ],
            updatedAt: new Date('2023-09-18'),
            links: [{
                title: 'DynamX',
                url: 'https://dynamx.fr/download/packs/618ae6c6698ff350f0cc5312/KabPack_Classic-4.0.dnxpack'
            }],
            files: [
                {
                    _id: randomUUID(),
                    game_version: 'DynamX >= 4.0',
                    title: 'Kab Classic updated',
                    version: '4.0',
                    url: 'https://dynamx.fr/download/packs/618ae6c6698ff350f0cc5312/KabPack_Classic-4.0.dnxpack',
                    changelog: 'Updated for DynamX 4.0',
                },
                {
                    _id: randomUUID(),
                    game_version: 'DynamX <= 3.3',
                    title: 'Kab Classic 3.0',
                    version: '3.0',
                    url: 'https://dynamx.fr/download/packs/618ae6c6698ff350f0cc5312/KabPack_Classic.dnxpack',
                    changelog: 'Initial release',
                }
            ]
        },
        {
            _id: randomUUID(),
            title: 'Dartcher global police',
            description: "Vehicle and armor of police forces",
            shortname: 'dartcherpolice',
            tags: ['armor', 'vehicle', 'contemporary'],
            images: [
                "https://dynamx.fr/img/packs/6147792f4421363350817fba/image0.png"
            ],
            updatedAt: new Date('2023-09-18'),
            links: [{
                title: 'DynamX',
                url: 'https://dynamx.fr/download/packs/6147792f4421363350817fba/DartcherPoliceGlobal-4.0.dnxpack'
            }],
            files: [
                {
                    _id: randomUUID(),
                    game_version: 'DynamX >= 4.0',
                    title: 'Dartcher global police 4.0',
                    version: '4.0',
                    url: 'https://dynamx.fr/download/packs/6147792f4421363350817fba/DartcherPoliceGlobal-4.0.dnxpack',
                    changelog: 'Updated for DynamX 4.0',
                },
                {
                    _id: randomUUID(),
                    game_version: 'DynamX <= 3.3',
                    title: 'Dartcher police global 3.0',
                    version: '3.0',
                    url: 'https://dynamx.fr/download/packs/6147792f4421363350817fba/DartcherPoliceGlobal.dnxpack',
                    changelog: 'Initial release',
                }
            ]
        },
        {
            _id: randomUUID(),
            title: 'SquidCraft',
            description: 'A squidgame inspired pack',
            shortname: 'squidcraft',
            tags: ['armor', 'props', 'blocks', 'contemporary'],
            images: [
                "https://dynamx.fr/img/packs/618b07f4698ff350f0cc5314/image0.png"
            ],
            updatedAt: new Date('2023-09-18'),
            links: [{
                title: 'DynamX',
                url: 'https://dynamx.fr/download/packs/618b07f4698ff350f0cc5314/DartcherSquidGame-4.0.dnxpack'
            }],
            files: [
                {
                    _id: randomUUID(),
                    game_version: 'DynamX >= 4.0',
                    title: 'SquidCraft 4.0',
                    version: '4.0',
                    url: 'https://dynamx.fr/download/packs/618b07f4698ff350f0cc5314/DartcherSquidGame-4.0.dnxpack',
                    changelog: 'Updated for DynamX 4.0',
                },
                {
                    _id: randomUUID(),
                    game_version: 'DynamX <= 3.3',
                    title: 'SquidCraft Pack 3.0',
                    version: '3.0',
                    url: 'https://dynamx.fr/download/packs/618b07f4698ff350f0cc5314/DartcherSquidGame.dnxpack',
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