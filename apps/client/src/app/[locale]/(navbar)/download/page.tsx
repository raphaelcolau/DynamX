// Definition: Presents the download page

import { generateStaticPaths } from "apps/client/src/_helpers/getStaticPath"

export async function getStaticPaths() {return generateStaticPaths()};

export default function Page() {
    return (
        <p>Download</p>
    )
}