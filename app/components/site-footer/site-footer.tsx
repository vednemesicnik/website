import { createStylesLink } from "~/utils"
import stylesUrl from "./styles.css"
import { socialSites } from "./social-sites"
import { links } from "./links"
import { Link } from "remix"

export const siteFooterStylesLink = createStylesLink(stylesUrl)

export const SiteFooter = () => {
  return (
    <footer data-name={"site-footer"}>
      <section data-name={"site-footer--content"}>
        {/* Website links */}
        <section data-name={"site-footer--links"}>
          {links.map((link) => (
            <Link key={link.id} to={link.route}>
              {link.name}
            </Link>
          ))}
        </section>

        {/* Social sites */}
        <section data-name={"site-footer--social-sites"}>
          {socialSites.map((socialSite) => (
            <a
              data-name={"site-footer--social-site-link"}
              key={socialSite.id}
              title={socialSite.title}
              href={socialSite.link}
            >
              {socialSite.icon}
            </a>
          ))}
        </section>

        {/* Website provider info */}
        <section data-name={"site-footer--info"}>
          <p>Tento web provozuje Vedneměsíčník, z. s</p>
        </section>
      </section>
    </footer>
  )
}
