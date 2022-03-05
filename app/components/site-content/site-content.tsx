import { ReactNode } from "react"
import { createStylesLink } from "~/utils"
import stylesUrl from "./styles.css"

export const siteContentStylesLink = createStylesLink(stylesUrl)

type Props = {
  children: ReactNode
}

export const SiteContent = ({ children }: Props) => {
  return (
    <main data-name={"site-content"}>
      <section data-name={"site-content--page"}>{children}</section>
    </main>
  )
}
