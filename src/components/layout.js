import React from "react"
import styled from "styled-components"

import Bio from "../components/bio"
import Link from "../components/styles/link"
import GlobalStyle from "../components/styles/globalStyle"

const Styled = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

function Layout({ location, children }) {
  let header
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    header = <Bio />
  } else {
    header = (
      <Link to="/">
        <h6 style={{ fontFamily: "Roboto Mono", fontWeight: "lighter" }}>
          Tanner Gaucher
        </h6>
      </Link>
    )
  }

  return (
    <Styled>
      <GlobalStyle />
      <header>{header}</header>
      <main>{children}</main>
    </Styled>
  )
}

export default Layout
