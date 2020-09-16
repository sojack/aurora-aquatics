/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()} <a href="/">aurora-aquatics.ca</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
