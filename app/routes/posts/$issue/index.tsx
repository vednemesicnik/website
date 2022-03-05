import { LoaderFunction, MetaFunction, useLoaderData } from "remix"
import { convertUrlIssueParam, getWebsiteTitle } from "~/utils"

type LoaderData = {
  issueTitle: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const issueTitle = convertUrlIssueParam(params.issue)

  return {
    issueTitle,
  } as LoaderData
}

export const meta: MetaFunction = ({ params }) => {
  const issue = convertUrlIssueParam(params.issue)
  return { title: getWebsiteTitle(`Články - ${issue}`) }
}

/**
 * Route Component
 */

export default function IssueRoute() {
  const { issueTitle } = useLoaderData<LoaderData>()

  return (
    <>
      <h1>{issueTitle}</h1>
    </>
  )
}
