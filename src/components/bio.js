import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Text, Box } from "rebass"

import Social from "../components/social"
import Link from "../components/styles/link"

function Bio() {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  const { fixed } = file.childImageSharp
  const { author } = site.siteMetadata

  return (
    <Flex alignItems="center" mt={[2, 4, 5]}>
      <Img
        fixed={fixed}
        imgStyle={{ borderRadius: "50%" }}
        style={{
          borderRadius: "50%",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.35)",
        }}
      />
      <Box ml={[3]}>
        <Text fontSize={[2]}>
          <Link to={"/"}>{author}</Link>
        </Text>
        <Social />
      </Box>
    </Flex>
  )
}

export default Bio
