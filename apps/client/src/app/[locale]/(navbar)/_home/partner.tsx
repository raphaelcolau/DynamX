import React from 'react';
import { Box, Typography } from '@mui/material';
import { Partner } from '../../../../_types/types';
import { StyledContainer } from './styled/container';
import { fetchPartnerData } from 'apps/client/src/_helpers/fetchPartner';

export default async function AnimatedPartner() {
    const minScroll = 0.46;

    const partnerData: Partner[] = await fetchPartnerData();

    const PartnerCard = (partner: Partner) => {
        return (
            <Box>
                <Typography variant="h5">{partner.title}</Typography>
            </Box>
        );
    };

    return (
        <StyledContainer
        >
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '90vmin',
                    maxHeight: '90vmin',
                    gap: '1rem',
                }}
            >
                {partnerData.map((partner: Partner) => <PartnerCard key={partner._id} {...partner} />)}
            </Box>
        </StyledContainer>
    )
}