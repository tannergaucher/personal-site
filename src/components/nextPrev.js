import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Styled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    font-weight: lighter;
  }
`

export default function nextPrev({ next, previous }) {
  return (
    <Styled>
      {next && (
        <li>
          <h4>
            <Link to={next.fields.slug}>→ {next.frontmatter.title}</Link>
          </h4>
        </li>
      )}
      {previous && (
        <li>
          <h4>
            <Link to={previous.fields.slug}>
              ← {previous.frontmatter.title}
            </Link>
          </h4>
        </li>
      )}
    </Styled>
  )
}
