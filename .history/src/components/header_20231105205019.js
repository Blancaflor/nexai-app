import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
