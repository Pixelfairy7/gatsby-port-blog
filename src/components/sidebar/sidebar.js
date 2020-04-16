import { Link } from "gatsby"
import React from "react"
import SideBarStyles from "./sidebar.module.css"

const SideBar = () => (
  <nav className={SideBarStyles.nav}>
    <div>
      <Link className={SideBarStyles.logo} to="/">
        <h1 className="hl-1 blue-accent">
          &#123;<span className="accent">Erika Conley</span>{" "}
          <span className="blue-accent">|</span>{" "}
          <span className="lavender">Front End Developer</span>&#125;
        </h1>
      </Link>
    </div>
    <ul className={SideBarStyles.navList}>
      <li>
        <Link
          className={SideBarStyles.link}
          activeClassName={SideBarStyles.active}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={SideBarStyles.link}
          activeClassName={SideBarStyles.active}
          to="/skills"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          className={SideBarStyles.link}
          activeClassName={SideBarStyles.active}
          to="/projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          className={SideBarStyles.link}
          activeClassName={SideBarStyles.active}
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className={SideBarStyles.link}
          activeClassName={SideBarStyles.active}
          to="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default SideBar
