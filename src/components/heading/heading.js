import { Link } from "gatsby"
import React from "react"
import HeadingStyles from "./heading.module.css"

const Heading = props => (
  <div className={HeadingStyles.container}>
    <h1 className={HeadingStyles.header}>
      &#123;<span className={HeadingStyles.accent}>{props.header}</span>
      &#125;
    </h1>
  </div>
)
export default Heading
