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
    <section className={layoutStyles.container}>
      <SideBar />
      <div className={layoutStyles.content}>
        <main style={{ margin: `3rem auto`, maxWidth: 900 }}>{children}</main>
      </div>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
