import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <h3>{data.site.siteMetadata.title}</h3>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">Sobre</ListLink>
          <ListLink to="/contact/">Contato</ListLink>
          <ListLink to="/my-files/">Listagem em GraphQL</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}