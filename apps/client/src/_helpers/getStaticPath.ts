import { locales as getLocales } from "../middleware";

export async function generateStaticPaths(): Promise<{ paths: { params: { locale: string } }[]; fallback: boolean }> {
    const locales: string[] = getLocales;

    const paths = locales.map((locale) => ({
        params: { locale },
    }));

    return {
        paths,
        fallback: false,
    };
}