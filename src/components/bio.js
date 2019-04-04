import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import AvatarImg from "./avatarImg"
import Navlinks from "./navlinks"

const Styled = styled.div`
  font-family: "Roboto Mono";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  h4 {
    margin-bottom: 0;
    font-weight: lighter;
  }
`

function Bio() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  const { author } = site.siteMetadata

  return (
    <Styled>
      <AvatarImg />
      <h4>{author}</h4>
      <Navlinks />
    </Styled>
  )
}

export default Bio
