import { ReactNode } from "react"
import styles from "./styles.css"
import { createStylesLink } from "~/utils"

export const siteNavigationStylesLink = createStylesLink(styles)

type Props = {
  children: ReactNode
}

export const SiteNavigation = ({ children }: Props) => {
  return <nav data-name={"site-navigation"}>{children}</nav>
}
