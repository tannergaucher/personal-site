import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Heading } from "rebass"

const SocialLink = ({ url, slug, text }) => (
  <Heading fontSize={[1, 2]} mr={[2]} fontWeight="lighter">
    <a href={`https://${url}/${slug}`} style={{ color: "black" }}>
      {text}
    </a>
  </Heading>
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
      <SocialLink url="github.com" slug={github} text="Github" />
      <SocialLink url="twitter.com" slug={twitter} text="Twitter" />
      <SocialLink url="spectrum.chat/users" slug={spectrum} text="Spectrum" />
    </Flex>
  )
}

export default Social
