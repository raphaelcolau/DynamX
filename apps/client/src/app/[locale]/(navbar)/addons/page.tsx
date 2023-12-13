// app/page.tsx is the UI for '/addons' route
import type { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { locale: 'fr' } },
            { params: { locale: 'en' } },
            { params: { locale: 'de' } },
        ],
        fallback: false,
    }
}


export default function Page() {
    return (
        <h1>Addons</h1>
    )
}