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
    <p className="motto">
      Power <span>of the</span> Pool
    </p>
    <div>
      <img src={mainLogo} alt="Aurora Aquatics logo" />
    </div>
    <div className="main">…coming soon</div>
  </Layout>
)

export default IndexPage
