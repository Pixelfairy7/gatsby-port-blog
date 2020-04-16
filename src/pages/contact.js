// libraries
import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <div className={ContactStyles.social}>
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          className={ContactStyles.icons}
        />

        <FontAwesomeIcon
          icon={["fab", "github"]}
          className={ContactStyles.icons}
        />
        <FontAwesomeIcon
          icon={["fab", "codepen"]}
          className={ContactStyles.icons}
        />
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          className={ContactStyles.icons}
        />
        <FontAwesomeIcon
          icon={["fab", "youtube"]}
          className={ContactStyles.icons}
        />
        <FontAwesomeIcon
          icon={["fab", "twitch"]}
          className={ContactStyles.icons}
        />
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          className={ContactStyles.icons}
        />
      </div>
    </div>
  </Layout>
)

export default ContactPage
