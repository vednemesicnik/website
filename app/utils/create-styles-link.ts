type StyleLink = {
  rel: "stylesheet"
  href: string
}

export function createStylesLink(styles: string): StyleLink {
  return {
    rel: "stylesheet",
    href: styles,
  }
}
