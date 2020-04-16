// libraries
import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import ContactStyles from "./contact.module.css"

//  import components
import Layout from "../components/layout"
import Heading from "../components/heading/heading"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Heading header="Contact" />
    <div className="content">
      <p className="copy">
        If you'd like to contact me to say <span className="accent">'Hi'</span>{" "}
        or just see what I'm up to, feel free to come visit any of my social
        profiles or drop me an email.
      </p>
    </div>
  </Layout>
)

export default ContactPage
