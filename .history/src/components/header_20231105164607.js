import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
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
    <img
      alt="Nex AI logo"
      height={20}
      style={{ margin: 0 }}
      ="C:\Users\blanc\OneDrive\Desktop\Nexaiai.com\nexai-app\src\images\nexai-logo.png"
    />
  </header>
)

export default Header
