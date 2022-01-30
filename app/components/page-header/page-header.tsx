import { ReactNode } from "react"
import styles from "./styles.css"

export function pageHeaderLinks() {
  return [{ rel: "stylesheet", href: styles }]
}

type Props = {
  children: ReactNode
}

export const PageHeader = ({ children }: Props) => {
  return <header data-name={"page-header"}>{children}</header>
}
