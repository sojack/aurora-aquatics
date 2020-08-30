import React from "react"
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mainLogo from "../images/logo-auroraAquatics.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <img className="logoSize" src={mainLogo} alt="Aurora Aquatics logo" />
    </div>
    <p className="motto">
      SWIMMING
      <br /> <span>for</span> EVERYONE
    </p>
    <div className="main">…coming soon</div>
  </Layout>
)

export default IndexPage
