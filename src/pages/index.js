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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          ...CardFragment
        }
      }
    }
  }
`
