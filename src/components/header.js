import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header
  // style={{
  //   position: `absolute`,
  //   width: `100%`,
  // }}
  >
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/myLogo.svg")} width="70" />
      </Link>
      <div class="menu">
        <Link to="/courses">Résumé</Link>
        <span></span>
        <Link to="/downloads">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
