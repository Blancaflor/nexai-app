import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src="" width="30" /></Link>
      <Link to="/courses">Course</Link>
    </div>
  </div>
)

export default Header
