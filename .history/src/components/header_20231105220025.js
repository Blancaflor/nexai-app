import * as React from "react"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/nexai-icon.png')} width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
