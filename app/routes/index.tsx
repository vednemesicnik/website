import { Link } from "remix"

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>VDM website</h1>
      <ul>
        <li>
          <Link to={"/organization"}>Spolek</Link>
        </li>
        <li>
          <Link to={"/editorial-board"}>Redakce</Link>
        </li>
        <li>
          <Link to={"/posts"}>Články</Link>
        </li>
        <li>
          <Link to={"/archive"}>Archiv</Link>
        </li>
      </ul>
    </div>
  )
}
