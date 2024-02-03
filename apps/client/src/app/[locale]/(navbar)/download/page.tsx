// Definition: Presents the download page
import React from 'react';
import { Content } from 'apps/client/src/_types/types';
import { randomUUID } from 'crypto';
import { Box } from '@mui/material';
import ContentCard from './content';

export default function Page() {
    const content: Content[] = [
        {
            _id: randomUUID(),
            title: 'DynamX Physics Mod',
            shortname: 'dynamx',
            description: `DynamX is a Pack-Based mod that aims to add realistic physics to Minecraft. The mod uses the Bullet Physics Engine that can be found in many video games like GTA V and also in Blender.

            DynamX allows you to create vehicles, cars and props with a large set of properties to fully customize your objects. You can also create items, blocks and armors, or spawn ragdolls.
            
            Everything can be easily created with content packs. Thanks to DynamX's OBJ Model Loader, every object you create can be provided with very detailled OBJ models.
            
            DynamX is also highly customizable with the possibility to create addons for the mod.`,
            images: ["https://media.forgecdn.net/attachments/390/743/2021-08-26_16.png"],
            videos: ["https://youtu.be/E9IS8Vo9VdU"],
            updatedAt: new Date('2023-09-18'),
            links: [
                {
                    title: 'CurseForge',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx'
                },
                {
                    title: 'ModRinth',
                    url: 'https://modrinth.com/mod/dynamx',
                }
            ],
            files: [
                {
                    _id: randomUUID(),
                    game_version: 'Forge 1.12.2',
                    title: 'DynamX 4.0.1',
                    version: '4.0.1',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx/download/4756674',
                },
                {
                    _id: randomUUID(),
                    game_version: 'Forge 1.12.2',
                    title: 'DynamX Alpha 3.3.0',
                    version: '3.3.0',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx/download/3594080',
                },
                {
                    _id: randomUUID(),
                    game_version: 'Forge 1.12.2',
                    title: 'DynamX Beta 3.2.0',
                    version: '3.2.0',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx/download/3521585',
                },
                {
                    _id: randomUUID(),
                    game_version: 'Forge 1.12.2',
                    title: 'DynamX Beta 3.1.0',
                    version: '3.1.0',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx/download/3484314',
                },
                {
                    _id: randomUUID(),
                    game_version: 'Forge 1.12.2',
                    title: 'DynamX Beta 3.0.1',
                    version: '3.0.1',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx/download/3444300',
                },
                {
                    _id: randomUUID(),
                    game_version: 'Forge 1.12.2',
                    title: 'DynamX Beta 3.0.0',
                    version: '3.0.0',
                    url: 'https://www.curseforge.com/minecraft/mc-mods/dynamx/download/3439832',
                },
            ]
        },
        {
            _id: randomUUID(),
            title: 'Betterlights',
            shortname: 'betterlights',
            description: `Experience the brilliance of Minecraft in a whole new light with BetterLights, the ultimate lighting mod that transforms your game world into a vibrant canvas of lights and shadows. BetterLights isn't just a lighting mod; it's an artistic tool that brings your creations to life.`,
            images: [
                "https://media.discordapp.net/attachments/687046382854471695/1161707352798539858/2023-10-10_23.png?ex=65ccef48&is=65ba7a48&hm=570582e4c3fc9c19dcd4591b39de85780ecbe48b6118fa2a29578abff428fd87&=&format=webp&quality=lossless&width=1330&height=702",
                "https://media.discordapp.net/attachments/687046382854471695/1188803024542502912/2023-12-24_20.07.53.png?ex=65c9fe97&is=65b78997&hm=c9ea9c353d1b9cef369950dbe2596715359163452cb8ab0dceacda4ed2e930b5&=&format=webp&quality=lossless&width=1330&height=702",
                "https://media.discordapp.net/attachments/687046382854471695/1201292770090954852/2024-01-27_19.png?ex=65c94a13&is=65b6d513&hm=dff2224c51bdabd0ffee10ce1e5ec4121d34bb0502d5e4cfe48bd8f928cf6304&=&format=webp&quality=lossless&width=1330&height=702",
                "https://media.discordapp.net/attachments/687046382854471695/1185254116516188160/2023-12-14_21.png?ex=65c64fea&is=65b3daea&hm=e1c7b2e05a6113bf0dbdbb6c64669fb2781fd6b7c552b488171da207a64b9111&=&format=webp&quality=lossless&width=1330&height=702",
                "https://media.discordapp.net/attachments/687046382854471695/1188803025263935489/2023-12-24_21.01.35.png?ex=65c9fe98&is=65b78998&hm=6a16f755384d6d32c0465281fec1712d554981c853d9fbc4da397e0dab9e9e36&=&format=webp&quality=lossless&width=1330&height=702",
                "https://media.discordapp.net/attachments/743856263225409587/1198404204646113411/2024-01-21_00.07.43.png?ex=65c80263&is=65b58d63&hm=880403469373e5c50c2c9ad97fcfc25fbaab1f0bf80cb15c869989782db6a529&=&format=webp&quality=lossless&width=1304&height=701",
            ],
            videos: ["https://youtu.be/E9IS8Vo9VdU"],
            updatedAt: new Date('2024-01-10'),
            links: [
                {
                    title: 'Patreon',
                    url: 'https://www.patreon.com/user?u=30961255'
                },
            ],
        
        }
    ]

    return (
        <Box sx={{
            height: {xs: 'fit-content', md: '100%'},
            padding: '2rem',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
        }}>
            {content.map((item, index) => (
                <ContentCard content={item} key={index} />
            ))}
        </Box>
    )
}