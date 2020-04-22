import { Link } from "gatsby"
import React from "react"
import SocialMedia from "../social/socialMedia"
import HeaderStyles from "./Header.module.css"

const Header = props => (
  <nav className={HeaderStyles.nav}>
    <div>
      <Link className={HeaderStyles.logo} to="/">
        <h1 className="hl-1 blue-accent">
          &#123;<span className="accent">Erika Conley</span>{" "}
          <span className="blue-accent">|</span>{" "}
          <span className="lavender">Front End Developer</span>&#125;
        </h1>
      </Link>
    </div>
    <ul className={HeaderStyles.navList}>
      <li>
        <Link
          className={HeaderStyles.link}
          activeClassName={HeaderStyles.active}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={HeaderStyles.link}
          activeClassName={HeaderStyles.active}
          to="/skills"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className={HeaderStyles.link}
          activeClassName={HeaderStyles.active}
          to="/projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className={HeaderStyles.link}
          activeClassName={HeaderStyles.active}
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className={HeaderStyles.link}
          activeClassName={HeaderStyles.active}
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
    <SocialMedia />
  </nav>
)

export default Header
