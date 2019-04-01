import React from "react"
import { Flex, Heading, Text } from "rebass"

import Bio from "../components/bio"
import Link from "../components/styles/link"
import GlobalStyle from "../components/styles/globalStyle"

const Initials = () => (
  <Flex
    mt={[2, 4, 5]}
    alignItems="center"
    justifyContent="center"
    style={{
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.35)",
    }}
  >
    <Link to="/">
      <Heading
        fontSize={[1, 2]}
        color="black"
        fontWeight="lighter"
        color="grey"
      >
        TG
      </Heading>
    </Link>
  </Flex>
)

function Layout({ location, children }) {
  let header
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    header = <Bio />
  } else {
    header = <Initials />
  }

  return (
    <Flex flexDirection="column" style={{ minHeight: "100vh" }} p={[2]}>
      <GlobalStyle />
      <Flex as="header" justifyContent={["flex-start", "center"]}>
        {header}
      </Flex>
      <Flex
        as="main"
        flexDirection="column"
        style={{ maxWidth: "667px" }}
        alignSelf="center"
        width={1}
        my={[4, 5]}
      >
        {children}
      </Flex>
      <Flex as="footer" justifyContent="center">
        <Text fontSize={[1]}>
          <Link to="/">
            <Text color="grey">
              {" "}
              © {new Date().getFullYear()} Tanner Gaucher{" "}
            </Text>
          </Link>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Layout
