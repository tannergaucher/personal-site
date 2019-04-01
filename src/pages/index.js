import React from "react"
import { graphql } from "gatsby"
import { Flex, Heading, Text } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/styles/link"
import Title from "../components/styles/title"

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
          <Flex key={node.fields.slug} flexDirection="column" mb={[5]}>
            <Heading
              fontSize={[1, 2]}
              fontWeight="lighter"
              my={[0, 0, 1]}
              color="grey"
            >
              {node.frontmatter.date}
            </Heading>
            <Title my={[1]} fontSize={[4, 5]}>
              {node.frontmatter.title}
            </Title>

            <Text
              as="article"
              fontSize={[1, 2]}
              my={[0, 1, 2]}
              lineHeight="1.5"
              color="grey"
              fontWeight="lighter"
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
            date(formatString: "M/DD/YYYY")
            title
            description
          }
        }
      }
    }
  }
`
