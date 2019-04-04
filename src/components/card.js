import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"

import Link from "../components/styles/link"

const Styled = styled.div`
  border-radius: 4px;
  transition: ease-in-out 0.2s;
  min-height: 450px;
  position: relative;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

  .date {
    margin: 1em;
    position: absolute;
    bottom: 0;
    right: 0;
    color: peachpuff;
    z-index: 2;
    padding: 1em;
    font-family: "Roboto Mono", monospace;
  }
  .inner {
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 1em;

    .title {
      color: white;
      text-decoration: underline;
    }

    .tags {
      display: flex;
      .tag {
        color: peachpuff;
        margin-top: 1em;
        margin-right: 1em;
      }
    }

    .description {
      font-weight: lighter;
      font-style: italic;
      font-family: "Roboto Mono", monospace;
      z-index: 2;
      color: #ffffb3;
    }
  }

  &:hover {
    transform: scale(1.02);
    transition: ease-in-out 0.2s;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`

export default function card({ node }) {
  return (
    <Styled>
      <div className="inner">
        <h2 className="title">
          <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <h6 className="description">
          {node.frontmatter.description || node.excerpt}
        </h6>
        <div className="tags">
          {node.frontmatter.tags &&
            node.frontmatter.tags.map(tag => (
              <h6 key={tag} className="tag">
                <Link to={`/tags/${kebabCase(tag)}`}>#{tag}</Link>
              </h6>
            ))}
        </div>
      </div>
      <h6 className="date">{node.frontmatter.date}</h6>
      <Img
        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
        style={{ height: "500px" }}
        imgStyle={{ filter: "brightness(.4)", borderRadius: "2px" }}
      />
    </Styled>
  )
}

export const postCardFragment = graphql`
  fragment PostCardFragment on MarkdownRemark {
    excerpt
    fields {
      slug
    }
    frontmatter {
      date(formatString: "M.DD.YY")
      title
      description
      tags
      featuredImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
