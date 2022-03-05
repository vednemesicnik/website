import { ReactNode } from "react"
import { createStylesLink } from "~/utils"
import stylesUrl from "./styles.css"
import { Logo } from "~/components"
import { Link } from "remix"

type Props = {
  children?: ReactNode
}

export const SiteHeader = ({ children }: Props) => {
  return (
    <header data-name={"site-header"}>
      <nav data-name={"site-header--navigation"}>
        <Link to={"/"}>
          <div data-name={"site-nav-logo-wrapper"}>
            <Logo />
          </div>
        </Link>
      </nav>
      {children}
    </header>
  )
}

export const siteHeaderStylesLink = createStylesLink(stylesUrl)
