'use client';
import { Box, InputBase, TextField, styled, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslations } from 'next-intl';

export default function SearchInput({handleSearch}: {handleSearch: (search: string) => void}) {
    const theme = useTheme();
    const t = useTranslations('SearchHeader');

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >

            <Box
                sx={{
                    width: "max(250px, 50%)",
                }}
            >
                <TextField
                    id="search"
                    label={t('search--placeholder')}
                    variant="outlined"
                    size='small'
                    sx={{
                        width: '100%',
                    }}
                    InputProps={{
                        sx: {
                            borderRadius: '2rem',
                            fontSize: '0.9rem',
                            paddingLeft: '0.5rem',
                        },
                        endAdornment: (
                            <SearchIcon
                                sx={{
                                    color: theme.palette.text.primary,
                                }}
                            />
                        ),
                    }}
                    InputLabelProps={{
                        sx: {
                            fontSize: '0.9rem',
                        },
                    }}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </Box>

           
        </Box>
    );
}