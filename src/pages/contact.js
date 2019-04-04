import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"

const Styled = styled.div`
  max-width: 500px;
  margin: 0 auto;

  .title {
    font-family: "Roboto Mono";
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      border: 1px solid black;
      font-family: "Roboto Mono";
      padding: 0.25em;
      font-size: 16px;
    }

    button {
      border: 1px solid black;
      box-shadow: 3px 4px 0px black;
      padding: 1em;
      margin-top: 2em;
      margin-bottom: 2em;
      background: white;
      text-transform: uppercase;
      font-family: "Roboto Mono";
      border-radius: 2px;

      &:hover {
        background: black;
        color: white;
        box-shadow: none;
      }
    }
  }

  code {
    font-family: "Roboto Mono";
    font-size: 16px;
    margin-bottom: 2em;
  }
`

function contact({ location }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
            }
          }
        }
        file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Styled>
      <Layout location={location} title={"Contact"}>
        <SEO title="contact" keywords={[`Tanner Gaucher`, `email`]} />
        <Img
          fluid={file.childImageSharp.fluid}
          style={{ marginBottom: "1.5em" }}
        />
        <p>
          Hi there{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          I'm a self-taught fullstack web developer.
        </p>
        <p>
          Javascript, React, Node.js, Gatsby, GraphQL, and Apollo are some of my{" "}
          <span role="img"> ❤️</span> things.
        </p>
        <p>
          I'm currently looking for a remote-first frontend to fullstack gig.
          Check out{" "}
          <a href={`http://github.com/${site.siteMetadata.social.github}`}>
            my github,
          </a>{" "}
          get in touch here <span role="img">👇</span> or via email:
          <p>
            <code>
              const myEmail = [`tanner`, `michael`, `gaucher`,
              `@gmail`].concat()
            </code>
          </p>
        </p>
        <form>
          <textarea placeholder="Send me words" rows="5" />
          <button type="submit">Submit</button>
        </form>
      </Layout>
    </Styled>
  )
}

export default contact
