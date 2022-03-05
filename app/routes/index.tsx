import { LinksFunction } from "remix"

export const links: LinksFunction = () => {
  return []
}

/**
 * Route Component
 */

export default function IndexRoute() {
  return (
    <>
      <h1>Vedneměsíčník</h1>

      <p>
        Všechny naše články najdete na <a href="https://medium.com/vednemesicnik">Medium</a>.
      </p>
    </>
  )
}
