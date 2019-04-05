import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"

const Styled = styled.div`
  max-width: 700px;
  margin: 0 auto;

  .image-wrapper {
    max-width: 350px;
  }

  .title {
    font-family: "Roboto Mono";
  }

  p {
    font-weight: lighter;
    margin-bottom: 1em;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      border: 1px solid black;
      font-family: "Roboto Mono";
      padding: 0.25em;
      font-size: 16px;
      border-radius: 2px;
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
        file(absolutePath: { regex: "/alt-pic.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
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
        <div className="image-wrapper">
          <Img
            fluid={file.childImageSharp.fluid}
            style={{ marginBottom: "1.5em" }}
          />
        </div>

        <p>
          Hey, I'm Tanner{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          . I am a self-taught web developer.
        </p>
        <p>
          Some things I <span role="img"> ❤️</span> are:
        </p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>GraphQL</li>
          <li>Gatsby</li>
          <li>Apollo</li>
          <li>Prisma</li>
        </ul>
        <p>
          I'm currently looking for a remote-first frontend to fullstack gig.
          Check out{" "}
          <a href={`http://github.com/${site.siteMetadata.social.github}`}>
            my github
          </a>{" "}
          and get in touch. <span role="img">👇</span>
        </p>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Email
              <input type="text" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message
              <textarea rows="5" name="message" />
            </label>
          </p>
          <button type="submit">Submit</button>
        </form>
        <p>
          <a href="mailto:tannermichaelgaucher@gmail.com">
            Or send me an email. 📮
          </a>
        </p>
      </Layout>
    </Styled>
  )
}

export default contact
