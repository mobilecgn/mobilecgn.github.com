import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {

  const data = useStaticQuery(graphql`
    query NextEvents {
      allSitePage(
        filter: {context: {frontmatter: {type: {eq: "event"}}}},
        sort: {fields: path, order: DESC}
      ) {
        edges {
          node {
            id
            path
            context {
              frontmatter {
                type
                title
                frontpage_line1
                frontpage_line2
                frontpage_line3
                frontpage_line4
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      {data.allSitePage.edges.map((edge, index, { length }) => (
        <div style={{ border: '3px solid black' }}>
          <div>{edge.node.context.frontmatter.frontpage_line1}</div>
          <h2><Link to={edge.node.path}>{length - index}. {edge.node.context.frontmatter.title}</Link></h2>
          <div>{edge.node.context.frontmatter.frontpage_line2}</div>
          <div>{edge.node.context.frontmatter.frontpage_line3}</div>
          <div dangerouslySetInnerHTML={{ __html: edge.node.context.frontmatter.frontpage_line4 }} />
        </div>
      ))}

    </Layout>
  )
}
