export const convertUrlIssueParam = (urlIssueParam: string | undefined) => {
  return urlIssueParam !== undefined ? urlIssueParam.replace("-", "/") : undefined
}
