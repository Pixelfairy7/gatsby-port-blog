import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Heading from "../components/heading/heading"
import IndexPageStyles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading header="Hello" />
    <div className={IndexPageStyles.content}>
      <h2>Erika Conley | Front End Developer</h2>
      <p>
        Hey y’all! I’m Erika with a{" "}
        <span className={IndexPageStyles.accent}>'k'</span> and I’m a curious
        new Software Developer currently focusing on the front end, working with
        React, who likes to experiment with new things and is interested in
        learning more about Accessibility, content creation && the little things
        about JavaScript.
      </p>
    </div>
  </Layout>
)

export default IndexPage
