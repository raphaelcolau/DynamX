'use client';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledButton } from 'apps/client/src/_components/styled/button/styledButton';
import { Content } from 'apps/client/src/_types/types';
import Carousel from 'react-material-ui-carousel'
import {useTranslations, useLocale} from 'next-intl';

function ImageComponent({ images, alt }: { images: string[], alt: string }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '100%',
                height: '34%',
                overflow: 'hidden',
            }}
        >
            {images.length > 1 ? 
                
                <Carousel
                    autoPlay={false}
                    animation="slide"
                    navButtonsAlwaysVisible={true}
                    indicators={false}
                    fullHeightHover={true}
                    navButtonsProps={
                        {
                            style: {
                                color: 'white',
                                backgroundColor: theme.palette.background.default,
                                borderRadius: '0%',
                                boxSizing: 'border-box',
                                padding: '0.2rem',
                                margin: '0.5rem',
                                border: `1px solid ${theme.palette.primary.main}`,
                            }
                        }
                    }
                    sx={{height: '100%', width: '100%'}}
                    swipe={true}
                >
                    {
                        images.map((image, index) => (
                            <img key={index} src={image} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', userSelect: 'none' } as React.CSSProperties} />
                        ))
                    }
                </Carousel>
                :
                <img src={images?.[0]} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            }
        </Box>
    )
}

export default function ContentCard({ content }: { content: Content }) {
    const theme = useTheme();
    const t = useTranslations('DownloadPage');

    return (
        <Box sx={{
            width: {lg: '30vw', md: '50vw', sm: '60vw', xs: '90vw'},
            height: 'min(800px, 80vh)',
            border: `1px solid ${theme.palette.divider}`,
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 50,
                left: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
                backgroundImage: content.images?.[0] ? `url(${content.images[0]})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(50px)',
                opacity: 0.25,
            },
        }}>
            <ImageComponent images={content.images} alt={content.title} />

            <Box
                sx={{
                    flex: 1,
                    height: '66%',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem',
                }}
            >
                <Typography variant="h5">{content.title}</Typography>

                <Box
                    sx={{
                        gap: '1rem',
                        display: {xs: 'flex', md: 'flex'},
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flex: 1,
                        maxHeight: {md: '66%', xs: '60%'},
                    }}
                >

                    <Box sx={{
                        maxHeight: '100%',
                        width: {sm: ((content.files && content.files.length > 0) ? '70%' : '100%'), xs: '100%'},
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        <Typography variant="body1">{content.description}</Typography>
                    </Box>

                    {content.files && content.files.length > 0 &&
                        <Box sx={{
                            display: {sm: 'flex', xs: 'none'},
                            flexDirection: 'column',
                            gap: '0.4rem',
                            maxHeight: '100%',
                            overflowY: 'auto',
                            width: '150px',
                        }}>
                            {content.files.map((file, index) => (
                                <a 
                                    key={index}
                                    href={file.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{textDecoration: 'none'}}
                                >
                                    <Box
                                        sx={{
                                            padding: '0.5rem',
                                            backgroundColor: theme.palette.background.default,
                                            display: (index > 3 ? 'none' : 'block'),
                                            color: theme.palette.text.primary,
                                            '&:hover': {
                                                backgroundColor: theme.palette.background.paper,
                                                outline: '1px solid transparent',
                                            },
                                        }}
                                    >
                                        <Typography variant="subtitle2">{file.title}</Typography>
                                        <Typography variant="caption" sx={{}}>{file.game_version}</Typography>
                                    </Box>
                                </a>
                            ))}
                        </Box>
                    }

                </Box>

                <Typography variant="caption" sx={{opacity: '0.5'}}>{t('card--last_update')} {content.updatedAt.toLocaleDateString()}</Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: '1rem',
                        marginTop: '1rem',
                    }}
                >

                    {content.links.map((link, index) => (
                        <>
                            <StyledButton
                                key={index}
                                variant="outlined"
                                href={link.url}
                                sx={{display: {xs: 'block', sm: 'none'}}}
                            >
                                {link.title}
                            </StyledButton>
                            <StyledButton
                                key={index}
                                variant="outlined"
                                href={link.url}
                                sx={{display: {xs: 'none', sm: 'block'}}}
                            >
                                {t('card--donwload__button')} {link.title}
                            </StyledButton>
                        </>
                        
                    ))}

                </Box>

            </Box>
        </Box>
    )
}