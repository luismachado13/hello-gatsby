import React from "react"
import Header from "../components/header"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function Home({data}) {
  return (
    <Layout>
    <div style={{ color: `purple` }}>
      <Header headerText="Hello Gatsby!" />
      <p>Site exemplo em Gatsby do</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`