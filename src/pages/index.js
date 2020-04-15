import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Heading from "../components/heading/heading"
import IndexPageStyles from "./index.module.css"
import "../styles/global.css"

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas, faCoffee)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <h1 className="hl-1">Erika Conley Front End Developer</h1>
      <Heading header="Hello" />
      <p className="copy">
        Hey y’all! I’m Erika with a{" "}
        <span className={IndexPageStyles.accent}>'k'</span> and I’m a curious
        new Atlanta based Software Developer currently focusing on the front end
        and working with React. I like to experiment with new things and I am
        interested in learning more about Accessibility, content creation && new
        technologies surrounding JavaScript.
      </p>
    </div>
  </Layout>
)

export default IndexPage
