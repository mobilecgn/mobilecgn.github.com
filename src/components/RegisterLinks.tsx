import React from "react"
import { usePageContext } from "../context/PageContext"

export default function RegisterLinks() {
  const page = usePageContext()

  const links = page.frontmatter.rvspLinks

  if (!links) {
    return null
  }

  return (
    <ul style={{ display: 'text' }}>
      {Object.keys(links).map(key => <li><a href={links[key]}>{labels[key] || key}</a></li>)}
    </ul>
  )
}

const labels = {
  meetup: 'Meetup',
}
