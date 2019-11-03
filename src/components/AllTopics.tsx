import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function AllTopics() {

  const data = useStaticQuery(graphql`
  query AllTopics {
    allSitePage(
      filter: {context: {frontmatter: {type: {eq: "event"}}}},
      sort: {fields: path, order: ASC}
    ) {
      edges {
        node {
          path
          context {
            frontmatter {
              themen
            }
          }
        }
      }
    }
  }  
  `)

  const topics: Array<{ path: string, title: string }> = []

  data.allSitePage.edges.forEach((edge) => {
    if (edge.node.context.frontmatter.themen) {
      edge.node.context.frontmatter.themen.forEach((title) => {
        topics.push({
          path: edge.node.path,
          title,
        })
      })
    }
  })

  return (
    <ol style={{ listStyleType: 'lower-roman' }}>
      {topics.map((topic, index) => <li key={index}><Link to={topic.path}>{topic.title}</Link></li>)}
    </ol>
  )
}
