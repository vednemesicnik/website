import { MetaFunction } from "remix"
import { getWebsiteTitle } from "~/utils"

export const meta: MetaFunction = () => {
  return { title: getWebsiteTitle("Články - Vše") }
}

/**
 * Route component
 */

export default function AllRoute() {
  return (
    <>
      <h1>Všechny články</h1>
    </>
  )
}
