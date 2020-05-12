import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"

export default function About({data}) {
  return (
    <Layout>
    <div style={{ color: `teal` }}>
        <Container>
            <h1>Sobre {data.site.siteMetadata.title} </h1>
            <h1>Um container</h1>
            <p>Olá mundo</p>
        </Container>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`