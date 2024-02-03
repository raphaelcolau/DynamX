'use client';
import React from 'react';
import { Content } from '../../_types/types';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslations } from 'next-intl';
import StyledPrimayButton from '../styled/button/styledMainButton';

export default function ContentGrid({content}: {content: Content[]}) {
    const t = useTranslations('ContentGrid');
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: {
                    sm: 'repeat(auto-fill, minmax(340px, 1fr))',
                    xs: 'repeat(auto-fill, minmax(300px, 1fr))'
                },
            }}
        >
            {content.map((item) => (
                <Box 
                    key={item._id}
                    sx={{
                        borderRadius: '8px',
                        border: `1px solid ${theme.palette.divider}`,
                        height: '350px',
                        overflow: 'hidden',
                    }}
                >

                    <Box sx={{
                        height: '60%',
                        width: '100%',
                        position: 'relative',
                        borderBottom: `2px solid ${theme.palette.divider}`,
                    }}>
                        <img 
                            src={item.images[0]}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            />
                    </Box>

                    <Box
                        sx={{
                            height: '40%',
                            padding: '0.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                        }}
                    >
                        <Box display={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                            <Typography variant='h6'>{item.title}</Typography>
                            <Typography variant='caption' sx={{opacity: '0.5'}}>{(item.files && item.files[0]) && item.files[0].game_version}</Typography>
                        </Box>

                        <Box sx={{
                            flex: 1,
                        }}>
                            <Typography variant='body2'>{item.description}</Typography>
                        </Box>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant='caption' sx={{opacity: '0.7'}}>{item.updatedAt.toLocaleDateString()}</Typography>
                            <StyledPrimayButton href={item.links[0].url}>{t('download--btn')} {item.links[0].title}</StyledPrimayButton>
                        </Box>
                        
                    </Box>
                </Box>
            ))}
        </Box>
    );
}