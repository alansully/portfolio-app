import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/Section"
import Wave from "../components/Wave"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            I'm Alan, a product designer. <br />I enjoy creating user-centric,
            delightful experiences. 
            <br /> Currently working at UserTestingnpm install.
            <br />
          </h1>
          <span>
            Previously at{" "}
            <a href="https://www.ibm.com/services/ibmix/" target="_blank">
              IBM
            </a>{" "}
            and{" "}
            <a href="https://www.britishgas.co.uk/" target="_blank">
              British Gas
            </a>
          </span>
          <br />
          <br />
          <Wave />
        </div>
      </div>
    </div>
    <div className="Cards">
      {/* <h2>11 courses, more coming</h2> */}
      <div className="CardGroup">
        <Link to="/page-2">
          <Card title=" " text=" " image={require("../images/pf_item5.png")} />
        </Link>
        <Link to="/page-2">
          <Card title=" " text=" " image={require("../images/pf_item1.png")} />
        </Link>
        <Link to="/page-2">
          <Card title=" " text=" " image={require("../images/pf_item4.png")} />
        </Link>
        <Link to="/page-2">
          <Card title=" " text=" " image={require("../images/pf_item3.png")} />
        </Link>
        <Link to="/page-2">
          <Card title=" " text=" " image={require("../images/pf_item2.png")} />
        </Link>
      </div>
      <img className="companies" src={require("../images/companies.svg")} />
    </div>

    <Section
      // logo={require("../images/logo-react.png")}
      title="Bringing my ideas to life"
      text="In my spare time I like to code. This allows me to explore ideas beyond static Sketch files or basic Framer animations, while also giving me the opportunity to have more constructive conversations with development teams."
      image={require("../images/coding_logos.svg")}
    />
  </Layout>
)

export default IndexPage
