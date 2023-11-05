import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to Nex AI |  Automated Services</h1>
        
        <p>We at Nex AI are putting time and effort in supporting companies with the most best digital sollution there is 24/7.</p>
        <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
