import React from "react"
import Link from "gatsby-link"
import "./Header.css"
import Pdf from "../Resume.pdf"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 100) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("../images/myLogo3.svg")} width="60" />
          </Link>
          <div class="menu">
            <a href={Pdf} target="_blank">
              Résumé
            </a>
            <span></span>
            <a href="mailto:alansully@gmail.com" target="_top">
              Contact
            </a>
            {/* <Link to=""></Link> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
