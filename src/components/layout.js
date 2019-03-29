import React from "react"
import { Flex, Text } from "rebass"
import { createGlobalStyle } from "styled-components"

import Bio from "../components/bio"
import Link from "../components/styles/link"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700');
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'IBM Plex Sans', sans-serif;
    background: "#fefefe"
   }

  p {
    line-height: 1.7;
  }
  a {
    color: blue;
  }
`

function Layout({ location, children }) {
  let header
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    header = <Bio />
  } else {
    header = (
      <Flex
        p={[2]}
        bg="black"
        mt={[0, 2, 5]}
        alignItems="center"
        justifyContent="center"
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.35)",
        }}
      >
        <Link to="/">
          <Text fontSize={[1, 2]} color="white">
            TG
          </Text>
        </Link>
      </Flex>
    )
  }

  return (
    <Flex flexDirection="column" style={{ minHeight: "100vh" }}>
      <GlobalStyle />
      <Flex as="header" justifyContent={["flex-start", "center"]} p={[2]}>
        {header}
      </Flex>
      <Flex
        as="main"
        flexDirection="column"
        style={{ maxWidth: "700px" }}
        alignSelf="center"
        p={[2]}
        flex="1 1 auto"
        width={1}
        my={[4, 5]}
      >
        {children}
      </Flex>
      <Flex as="footer" justifyContent="center" p={[2]}>
        <Text fontSize={[1]}>
          <Link to="/">© {new Date().getFullYear()} Tanner Gaucher</Link>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Layout
