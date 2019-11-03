import React, { ReactNode } from "react"

interface Talk {
  title: string
  speakers?: Speaker[]
}

interface Speaker {
  name: string,
  company?: string,
}

export default function Talks({ talks }: { talks: Talk[] }) {
  if (!talks) {
    return null
  }
  return <ul>{talks.map((talk, index) => <li key={index}><Talk talk={talk} /></li>)}</ul>
}

function Talk({ talk }: { talk: Talk }): any {

  let lastCompany
  const speakers: ReactNode[] = []

  if (talk.speakers && talk.speakers.length > 0) {

    talk.speakers.slice().reverse().forEach((speaker, index, { length }) => {

      if (speaker.company && speaker.company !== lastCompany) {
        speakers.unshift(
          speaker.name,
          ' von ',
          speaker.company,
        )
        lastCompany = speaker.company
      } else {
        speakers.unshift(speaker.name)
      }

      if (index > 0) {
        speakers.push(' AND ')
      }
    })

    speakers.unshift(<br/>)
  }

  return (
    <>
      {talk.title}
      {speakers}
    </>
  )
}
