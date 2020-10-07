/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="mainDiv">
        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()} <a href="/">aurora-aquatics.ca</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
