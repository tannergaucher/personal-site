import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Styled = styled.div`
  .date {
    font-family: "Roboto Mono";
  }

  .post-links {
    font-family: "Roboto Mono";
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;

    a {
      color: black;
    }
  }
`

function Post({ data, location, pageContext }) {
  const { markdownRemark: post, site } = data
  const { next, previous } = pageContext

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Styled>
        <h1>{post.frontmatter.title}</h1>
        <h6 className="date">{post.frontmatter.date}</h6>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
        <ul className="post-links">
          {next && (
            <li>
              <h4>
                <Link to={next.fields.slug}>
                  Next: {next.frontmatter.title}
                </Link>
              </h4>
            </li>
          )}
          {previous && (
            <li>
              <h4>
                <Link to={previous.fields.slug}>
                  Previous: {previous.frontmatter.title}
                </Link>
              </h4>
            </li>
          )}
        </ul>
      </Styled>
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
      excerpt(pruneLength: 120)
      html
      frontmatter {
        title
        date(formatString: "M.DD.YYYY")
        description
      }
    }
  }
`
