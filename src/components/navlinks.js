import React from "react"
import styled from "styled-components"
import Link from "../components/styles/link"
import { useStaticQuery, graphql } from "gatsby"

const Styled = styled.div`
  margin-top: 0;
  display: flex;

  h6 {
    font-weight: lighter;
    color: black;

    a {
      color: black;
    }
  }

  .mr {
    margin-right: 1em;
  }
`

export default function navlinks() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
            }
          }
        }
      }
    `
  )

  const { github } = site.siteMetadata.social
  return (
    <Styled>
      <h6 className="mr">
        <Link to="/contact">Contact </Link>
      </h6>
      <h6>
        <a href={`http://github.com/${github}`}>Github</a>
      </h6>
    </Styled>
  )
}
