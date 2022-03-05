import { LinkDescriptor } from "remix"

export function createStylesLink(stylesUrl: string): LinkDescriptor {
  return {
    rel: "stylesheet",
    href: stylesUrl,
  }
}
