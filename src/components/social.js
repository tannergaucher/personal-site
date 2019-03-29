import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Heading } from "rebass"

const SocialLink = props => (
  <Heading {...props} fontSize={[1, 2]} mr={[2]} fontWeight="500" />
)

function Social() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              github
              spectrum
            }
          }
        }
      }
    `
  )

  const { github, twitter, spectrum } = site.siteMetadata.social

  return (
    <Flex>
      <SocialLink>
        <a
          href={`https://github.com/${github}`}
          style={{ textDecoration: "none" }}
        >
          Github
        </a>
      </SocialLink>
      <SocialLink>
        <a
          href={`https://twitter.com/${twitter}`}
          style={{ textDecoration: "none" }}
        >
          Twitter
        </a>
      </SocialLink>
      <SocialLink>
        <a
          href={`https://spectrum.chat/users/${spectrum}`}
          style={{ textDecoration: "none" }}
        >
          Spectrum
        </a>
      </SocialLink>
    </Flex>
  )
}

export default Social
