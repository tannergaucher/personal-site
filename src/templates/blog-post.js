import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text, Box } from "rebass"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/styles/title"

const NavLink = ({ slug, title }) => (
  <Heading fontSize={[2, 3]} m={[3, 4, 5]} fontWeight="lighter">
    <Link to={slug}>{title}</Link>
  </Heading>
)

function Post({ data, location, pageContext }) {
  const { markdownRemark: post, site } = data
  const { next, previous } = pageContext

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Heading fontSize={[1, 2]} fontWeight="lighter" color="grey">
        {post.frontmatter.date}
      </Heading>
      <Title my={[1]}>{post.frontmatter.title}</Title>
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
            <NavLink
              slug={previous.fields.slug}
              title={`← ${previous.frontmatter.title}`}
            />
          )}
        </li>
        <li>
          {next && (
            <NavLink
              slug={next.fields.slug}
              title={`${next.frontmatter.title} → `}
            />
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
        date(formatString: "M/DD/YYYY")
        description
      }
    }
  }
`
