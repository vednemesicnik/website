import cuid from "cuid"

export const links = [
  {
    id: cuid(),
    name: "Spolek",
    route: "organization",
  },
  {
    id: cuid(),
    name: "Redakce",
    route: "editorial-board",
  },
  {
    id: cuid(),
    name: "Archiv",
    route: "archive",
  },
]
