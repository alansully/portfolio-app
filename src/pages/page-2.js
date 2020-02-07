import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/Section"
import Wave from "../components/Wave"

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            This page is currently being built. <br />
            Please reach out to me at alansully@gmail.com
            <br /> for access to a PDF version of this project
            <br />
          </h1>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
