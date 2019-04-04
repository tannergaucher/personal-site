import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div style={{ display: "flex" }}>
      <h5>
        <a
          href={`https://www.github.com/${github}`}
          style={{ marginRight: "1em" }}
        >
          Github
        </a>
      </h5>
      <h5>
        <a
          href={`https://www.twitter.com/${twitter}`}
          style={{ marginRight: "1em" }}
        >
          Twitter
        </a>
      </h5>
      <h5>
        <a
          href={`https://www.spectrum.chat/users/${spectrum}`}
          style={{ marginRight: "1em" }}
        >
          Spectrum
        </a>
      </h5>
    </div>
  )
}

export default Social
