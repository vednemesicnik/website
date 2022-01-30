const TITLE = "Vedneměsíčník"

export const getWebsiteTitle = (sectionTitle?: string): string =>
  sectionTitle !== undefined ? `${sectionTitle} | ${TITLE}` : TITLE
