import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text, Box } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Post({ data, location, pageContext }) {
  const { markdownRemark: post, site } = data
  const { next, previous } = pageContext

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Heading fontSize={[5, 6]} my={[2, 3]}>
        {post.frontmatter.title}
      </Heading>

      <Text fontSize={[1, 2]} my={[2]}>
        {post.frontmatter.date}
      </Text>
      <Text
        fontSize={[2, 3]}
        mt={[3, 4, 5]}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <br />

      <Box
        as="ul"
        style={{ listStyle: "none", margin: 0, padding: 0 }}
        my={[3]}
      >
        <li>
          {previous && (
            <Heading fontSize={[2, 3]} m={[3, 4, 5]}>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </Heading>
          )}
        </li>
        <li>
          {next && (
            <Heading fontSize={[2, 3]} m={[3, 4, 5]}>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </Heading>
          )}
        </li>
      </Box>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        # todo: make this a fragment, shared with index page
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
`
