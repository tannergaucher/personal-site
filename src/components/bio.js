import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Flex, Heading, Text, Box } from "rebass"

import Social from "../components/social"
import Link from "../components/styles/link"

function Bio() {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
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
    <Flex alignItems="center" mt={[0, 2, 5]}>
      <Image
        fixed={fixed}
        imgStyle={{ borderRadius: "50%" }}
        style={{
          borderRadius: "50%",
          boxShadow: "0 2px 16px rgba(0, 0, 0, 0.35)",
        }}
      />
      <Box my={[2]} ml={[3]}>
        <Text fontSize={[2]}>
          <Link to={"/"}>{author}</Link>
        </Text>
        <Social />
      </Box>
    </Flex>
  )
}

export default Bio
