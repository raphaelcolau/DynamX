'use client';
import { Box } from "@mui/material";
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function Page() {
    let locale = useLocale();

    if (locale === 'de') locale = 'en';

    useEffect(() => {
        window.location.replace(`https://wiki.dynamx.fr/${locale}`);
    });

    return (
        <Box
            onClick={() => window.location.href = `https://wiki.dynamx.fr/${locale}`}
        >
            <h1>Redirecting to {locale}</h1>
        </Box>
    )
}