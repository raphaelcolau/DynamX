//Definition: Presents the packs page
import { generateStaticPaths } from "apps/client/src/_helpers/getStaticPath"

export async function getStaticPaths() {return generateStaticPaths()};

export default function Page() {
    return (
        <h1>Packs</h1>
    )
}