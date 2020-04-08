import { Link } from "gatsby"
import React from "react"
import SideBarStyles from "./sidebar.module.css"

const SideBar = () => (
  <nav className={SideBarStyles.nav}>
    <div>
      <Link className={SideBarStyles.logo} to="/">
        &#123;<span className={SideBarStyles.kAccent}>Erika Conley</span>&#125;
      </Link>
    </div>
    <ul className={SideBarStyles.navList}>
      <li>
        <Link className={SideBarStyles.link} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className={SideBarStyles.link} to="/skills">
          Skills
        </Link>
      </li>
      <li>
        <Link className={SideBarStyles.link} to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className={SideBarStyles.link} to="/blog">
          Blog
        </Link>
      </li>
    </ul>
  </nav>
)

export default SideBar
