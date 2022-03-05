import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix"
import type { MetaFunction } from "remix"
import { getWebsiteTitle } from "./utils"
import {
  SiteContent,
  siteContentStylesLink,
  SiteFooter,
  siteFooterStylesLink,
  SiteHeader,
  siteHeaderStylesLink,
} from "~/components"
import { globalStylesLink } from "~/styles"

// noinspection JSUnusedGlobalSymbols
export const meta: MetaFunction = () => {
  return { title: getWebsiteTitle() }
}

// noinspection JSUnusedGlobalSymbols
export const links: LinksFunction = () => {
  return [globalStylesLink, siteHeaderStylesLink, siteContentStylesLink, siteFooterStylesLink]
}

// noinspection JSUnusedGlobalSymbols
export default function App() {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links />
      </head>
      <body>
        <SiteHeader />

        <SiteContent>
          <Outlet />
        </SiteContent>

        <SiteFooter />

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
