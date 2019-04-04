import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1em;

  .post {
    border-radius: 4px;
    transition: ease-in-out 0.2s;
    min-height: 450px;
    max-width: 450px;
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
  }
`

function Index({ data, location }) {
  const { title } = data.site.siteMetadata
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout location={location} title={title}>
      <SEO
        title="All posts"
        keywords={[
          `blog`,
          `Gatsby`,
          `Javascript`,
          `React`,
          `software developer`,
          `Tanner Gaucher`,
        ]}
      />
      <Styled>
        {posts.map(({ node }) => (
          <Card node={node} key={node} />
        ))}
      </Styled>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          ...PostCardFragment
        }
      }
    }
  }
`
