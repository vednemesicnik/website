import { ReactNode } from "react"
import styles from "./styles.css"
import { createStylesLink } from "~/utils"

export const pageHeaderStylesLink = createStylesLink(styles)

type Props = {
  children?: ReactNode
}

export const PageHeader = ({ children }: Props) => {
  return <header data-name={"page-header"}>{children}</header>
}
