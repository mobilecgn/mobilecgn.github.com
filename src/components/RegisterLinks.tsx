import React from "react"
import { usePageContext } from "../context/PageContext"

export default function RegisterLinks() {
  const page = usePageContext()

  const links = page.frontmatter.rvspLinks

  if (!links) {
    return null
  }

  return (
    <span>
      {Object.keys(links).map(key => <span> &nbsp; <a href={links[key]}>{labels[key] || key}</a></span>)}
    </span>
  )
}

const labels = {
  doodle: 'Doodle',
  hackenin: 'hacken.in',
  meetup: 'Meetup',
  nerdhub: 'nerdhub',
  xing: 'Xing',
}
