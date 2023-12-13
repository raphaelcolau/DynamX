import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { CustomThemeOptions } from '../../../../_assets/theme/darktheme';
import { Partner } from '../../../../_types/types';

export default async function AnimatedPartner() {
    const theme: CustomThemeOptions = useTheme();
    const minScroll = 0.46;

    const fetchPartnerData = async (): Promise<Partner[]> => {
        try {
            const response = await fetch('https://api.dynamx.fr/partner', {
                cache: 'no-cache',
            });
            const data = await response.json();
            return data.message;
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    const partnerData: Partner[] = await fetchPartnerData();

    const PartnerCard = (partner: Partner) => {
        return (
            <Box>
                <Typography variant="h5">{partner.title}</Typography>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: "theme.palette.background.paper",
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '90vmin',
                    maxHeight: '90vmin',
                }}
            >
                {partnerData.map((partner: Partner) => <PartnerCard key={partner._id} {...partner} />)}
            </Box>
        </Box>
    )
}