import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            I'm Alan, a Senior UX Designer. <br />I enjoy creating user-centric,
            delightful experiences.
            <br /> Currently working in Vancouver, BC.
            <br />
          </h1>
          <span>
            Previously at{" "}
            <a href="https://www.ibm.com/services/ibmix/" target="_blank">
              IBM iX
            </a>{" "}
            and{" "}
            <a href="https://www.centrica.com/" target="_blank">
              Centrica
            </a>
          </span>
          <br />
          <br />
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
