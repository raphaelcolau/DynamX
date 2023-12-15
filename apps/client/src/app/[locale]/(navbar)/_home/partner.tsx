import React, { useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { Partner } from '../../../../_types/types';
import { StyledContainer } from './styled/container';
// import { fetchPartnerData } from 'apps/client/src/_helpers/fetchPartner';

const PartnerCard = (partner: Partner) => {
    return (
        <Box>
            <Typography variant="h5">{partner.title}</Typography>
        </Box>
    );
};

async function getPartnerData(): Promise<Partner[]> {
    const res = await fetch('https://api.dynamx.fr/partner');
    const data = await res.json();

    return data.message;

}

function putPartnerData(): Partner[] {
    return [{"_id":"61609f937ee20c3f6040df97","title":"Cité 4","shortname":"cite4","logo":"https://dynamx.fr/img/partner/cite4b.png","description":"Cité 4 est un projet qui a maintenant plus de 2 ans basés sur le célèbre jeu Half-Life 2. Nous avons pour objectif d'immerger le joueur dans un univers semblable à celui du jeu, en modifiant certains aspects pour rendre le gameplay bien plus intéressant.","link":"https://cite4rp.fr/","discord":"https://discord.gg/wKvEMHK6qW","lang":"fr"},{"_id":"6065bf80acfdbc47389dbf4f","title":"FariSun","shortname":"fari","logo":"https://dynamx.fr/img/partner/farisun.png","description":"FariSun est un serveur minecraft RP et moddé en monde ouvert. Aucune limite, excepté votre imagination !","link":"https://www.farisun.fr/","discord":"https://discord.com/invite/9Ytz8VxbFF","lang":"fr"},{"_id":"61350e57e3407e0320313135","title":"StateMC","shortname":"stmc","logo":"https://dynamx.fr/img/partner/statemc.png","description":"Minecraft Roleplay","link":"https://www.statemc.de/","discord":"https://discord.com/invite/JNVkRxP","lang":"de"},{"_id":"6136562be3407e0320313137","title":" LyraCraft","shortname":"lyra","logo":"https://dynamx.fr/img/partner/lyracraft.png","description":"LyraCraft RP est un serveur modé en 1.12.2. Plein d’aspect de jeu sont présent sur le serveur pour adapter le roleplay à toutes types de personnes venant sur le serveur !","link":"https://lyracraft.fr/","discord":"https://discord.gg/uTJnuJ4","lang":"fr"},{"_id":"6135b924e3407e0320313136","title":"OceanRP","shortname":"ocrp","logo":"https://dynamx.fr/img/partner/ocrp.png","description":"OcéanRP est un serveur Serious RP sous whitelist . Ayant la particularité de développer les métiers de l'artisanat, nous vous préparons une expérience de jeu inégalée tout en gardant les métiers traditionnels .","link":"https://oceanrp.fr/","discord":"https://discord.gg/TQ6dhNsAph","lang":"fr"},{"_id":"6065bf80acfdbc47389dbf4c","title":"Drawlife","shortname":"dwlf","logo":"https://dynamx.fr/img/partner/drawlife.png","description":"Drawlife est un serveur whitelist de jeu de rôle sur Minecraft.","link":"http://https://drawlife.eu/","discord":"https://discord.gg/8zSfyvY","lang":"fr"}];
}

export default function AnimatedPartner() {
    const minScroll = 0.46;

    // const partnerData: Partner[] = [{"_id":"61609f937ee20c3f6040df97","title":"Cité 4","shortname":"cite4","logo":"https://dynamx.fr/img/partner/cite4b.png","description":"Cité 4 est un projet qui a maintenant plus de 2 ans basés sur le célèbre jeu Half-Life 2. Nous avons pour objectif d'immerger le joueur dans un univers semblable à celui du jeu, en modifiant certains aspects pour rendre le gameplay bien plus intéressant.","link":"https://cite4rp.fr/","discord":"https://discord.gg/wKvEMHK6qW","lang":"fr"},{"_id":"6065bf80acfdbc47389dbf4f","title":"FariSun","shortname":"fari","logo":"https://dynamx.fr/img/partner/farisun.png","description":"FariSun est un serveur minecraft RP et moddé en monde ouvert. Aucune limite, excepté votre imagination !","link":"https://www.farisun.fr/","discord":"https://discord.com/invite/9Ytz8VxbFF","lang":"fr"},{"_id":"61350e57e3407e0320313135","title":"StateMC","shortname":"stmc","logo":"https://dynamx.fr/img/partner/statemc.png","description":"Minecraft Roleplay","link":"https://www.statemc.de/","discord":"https://discord.com/invite/JNVkRxP","lang":"de"},{"_id":"6136562be3407e0320313137","title":" LyraCraft","shortname":"lyra","logo":"https://dynamx.fr/img/partner/lyracraft.png","description":"LyraCraft RP est un serveur modé en 1.12.2. Plein d’aspect de jeu sont présent sur le serveur pour adapter le roleplay à toutes types de personnes venant sur le serveur !","link":"https://lyracraft.fr/","discord":"https://discord.gg/uTJnuJ4","lang":"fr"},{"_id":"6135b924e3407e0320313136","title":"OceanRP","shortname":"ocrp","logo":"https://dynamx.fr/img/partner/ocrp.png","description":"OcéanRP est un serveur Serious RP sous whitelist . Ayant la particularité de développer les métiers de l'artisanat, nous vous préparons une expérience de jeu inégalée tout en gardant les métiers traditionnels .","link":"https://oceanrp.fr/","discord":"https://discord.gg/TQ6dhNsAph","lang":"fr"},{"_id":"6065bf80acfdbc47389dbf4c","title":"Drawlife","shortname":"dwlf","logo":"https://dynamx.fr/img/partner/drawlife.png","description":"Drawlife est un serveur whitelist de jeu de rôle sur Minecraft.","link":"http://https://drawlife.eu/","discord":"https://discord.gg/8zSfyvY","lang":"fr"}];
    // const partnerData: Partner[] = await fetchPartnerData();
    const partnerData: Partner[] = putPartnerData();

    useEffect(() => {
    if (typeof window !== 'undefined') {
        console.log('Rendu côté client');
    } else {
        console.log('Rendu côté serveur');
    }
    }, []);

    return (
        <StyledContainer>
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '90vmin',
                    maxHeight: '90vmin',
                    gap: '1rem',
                }}
            >
                Je suis un children
                {/* {partnerData.map((partner: Partner) => <PartnerCard key={partner._id} {...partner} />)} */}
            </Box>
        </StyledContainer>
    )
}