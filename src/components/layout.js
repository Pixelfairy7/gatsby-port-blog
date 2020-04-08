/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import layoutStyles from "./layout.module.css"
import SideBar from "./sidebar/sidebar"
import Heading from "../components/heading/heading"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <SideBar />
      <div className={layoutStyles.content}>
        <main className={layoutStyles.mainContainer}>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
