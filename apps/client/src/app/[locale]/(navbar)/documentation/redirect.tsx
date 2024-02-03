'use client';
import { useLocale } from "next-intl";
import { useEffect } from "react";

export default function Redirect() {
    let locale = useLocale();

    if (locale === 'de') locale = 'en';

    useEffect(() => {
        window.location.replace(`https://wiki.dynamx.fr/${locale}`);
    });

    return <></>;
}