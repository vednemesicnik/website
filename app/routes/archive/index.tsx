import { LinksFunction, MetaFunction } from "remix"
import { getWebsiteTitle } from "~/utils"

export const meta: MetaFunction = () => {
  return { title: getWebsiteTitle("Archiv") }
}

export const links: LinksFunction = () => {
  return []
}

export default function ArchiveIndex() {
  return (
    <>
      <h1>Archiv</h1>
      <p>some text...</p>
    </>
  )
}
