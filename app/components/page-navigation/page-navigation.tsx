import { ReactNode } from "react"
import styles from "./styles.css"

export function pageNavigationLinks() {
  return [{ rel: "stylesheet", href: styles }]
}

type Props = {
  children: ReactNode
}

export const PageNavigation = ({ children }: Props) => {
  return <nav data-name={"page-navigation"}>{children}</nav>
}
