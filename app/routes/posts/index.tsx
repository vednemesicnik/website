import { Link, MetaFunction } from "remix"
import { getWebsiteTitle } from "~/utils"

export const meta: MetaFunction = () => {
  return { title: getWebsiteTitle("Články") }
}

/**
 * Route Component
 */

export default function PostsRoute() {
  return (
    <>
      <h1>Články</h1>

      <ul>
        <li>
          <Link to={"4-2021/"}>4/2021</Link>
        </li>
        <li>
          <Link to={"3-2021/"}>3/2021</Link>
        </li>
        <li>
          <Link to={"all/"}>Vše</Link>
        </li>
      </ul>
    </>
  )
}
