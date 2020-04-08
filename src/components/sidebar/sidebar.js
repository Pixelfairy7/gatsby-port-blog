import { Link } from "gatsby"
import React from "react"
import SideBarStyles from "./sidebar.module.css"

const SideBar = () => (
  <nav className={SideBarStyles.nav}>
    <div>
      <Link className={SideBarStyles.logo} to="/">
        &#123;<span className={SideBarStyles.kAccent}>k</span>&#125;
      </Link>
    </div>
    <ul className={SideBarStyles.navList}>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default SideBar
