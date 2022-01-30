import { Link, MetaFunction } from "remix"
import { getWebsiteTitle } from "~/utils"
import { PageHeader, PageNavigation, pageHeaderLinks, pageNavigationLinks } from "~/components"

export const meta: MetaFunction = () => {
  return { title: getWebsiteTitle("Archiv") }
}

export function links() {
  return [...pageHeaderLinks(), ...pageNavigationLinks()]
}

export default function ArchiveIndex() {
  return (
    <>
      <PageHeader>
        <PageNavigation>
          <Link to={"/"}>HOME</Link>
        </PageNavigation>
      </PageHeader>
      <main>
        <h1>Archiv</h1>
        <p>some text...</p>
      </main>
    </>
  )
}
