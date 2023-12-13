// app/page.tsx is the UI for '/addons' route

import { generateStaticPaths } from "apps/client/src/_helpers/getStaticPath"

export async function getStaticPaths() {
    return generateStaticPaths();
}

export default function Page() {
    return (
        <h1>Addons</h1>
    )
}