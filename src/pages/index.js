import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import { Flex, Heading, Text } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/styles/link"

function Index({ data, location }) {
  const { title } = data.site.siteMetadata
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout location={location} title={title}>
      <SEO
        title="All posts"
        keywords={[
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `software developer`,
          `Tanner Gaucher`,
        ]}
      />
      {posts.map(({ node }) => (
        <Link to={node.fields.slug}>
          <Flex key={node.fields.slug} flexDirection="column" mb={[5, 6]}>
            <Text as="small" fontSize={[1]}>
              {node.frontmatter.date}
            </Text>
            <Heading as="h3" fontSize={[4, 5]}>
              {node.frontmatter.title}
            </Heading>

            <Text
              as="article"
              fontSize={[1, 2]}
              my={[0]}
              lineHeight="1.5"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </Flex>
        </Link>
      ))}
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
