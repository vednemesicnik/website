import { LinksFunction, MetaFunction } from "remix"
import { getWebsiteTitle } from "~/utils"

export const meta: MetaFunction = () => {
  return { title: getWebsiteTitle("Redakce") }
}

export const links: LinksFunction = () => {
  return []
}

export default function EditorialBoardIndex() {
  return (
    <>
      <h1>Tak to je naše redakce</h1>
      <p>Prosím, seznamte se. Je nás hodně.</p>

      <section>
        <h2>Šéfredaktoři</h2>
        <p>---</p>
      </section>

      <section>
        <h2>Redaktoři</h2>
        <p>---</p>
      </section>

      <section>
        <h2>Vrchní poeta</h2>
        <p>---</p>
      </section>

      <section>
        <h2>Grafika</h2>
        <p>---</p>
      </section>

      <section>
        <h2>Poradci</h2>
        <p>---</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          <a href="mailto:redakce@vednemesicnik.cz">redakce@vednemesicnik.cz</a>
        </p>
      </section>
    </>
  )
}
