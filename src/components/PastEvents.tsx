import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import moment from 'moment'

import Talks from './talks'

export default function PastEvents() {

  const data = useStaticQuery(graphql`
  query PastEvents {
    pastEvents: allSitePage(
      filter: {
        context: {
          frontmatter: {
            type: { eq: "event" }
          }
        }
      },
      sort: { fields: path, order: DESC }
    ) {
      edges {
        node {
          path
          context {
            frontmatter {
              title
              event {
                start
                end
              }
              talks {
                title
                speakers {
                  name
                  company
                }
              }
            }
          }
        }
      }
    }
  }
  `)

  return data.pastEvents.edges.map(mapPathEvent)
}

function mapPathEvent(edge, index, { length }) {
  const { node: { path, context: { frontmatter } } } = edge

  const startDate = frontmatter.event && frontmatter.event.start || path.substring(6, 16)
  const localStartDate = moment(startDate).locale('de_DE').format('dd., DD.MM.YYYY')

  return (
    <div style={{ border: '3px solid black' }}>
      <div>{localStartDate}</div>
      <h3><Link to={path}>{length - index}. {frontmatter.title}</Link></h3>
      <Talks talks={frontmatter.talks} />
    </div>
  )
}
