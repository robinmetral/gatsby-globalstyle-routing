import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <Link to="/second">Click me</Link>
  </Layout>
)

export default IndexPage
