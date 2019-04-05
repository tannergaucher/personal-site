import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NextPrev from "../components/nextPrev"

const Styled = styled.div`
  .date {
    font-weight: lighter;
  }
`

function Post({ data, location, pageContext }) {
  console.log(pageContext)
  const { markdownRemark: post, site } = data

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Styled>
        <h1 className="title">{post.frontmatter.title}</h1>
        <h6 className="date">{post.frontmatter.date}</h6>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <NextPrev next={pageContext.next} previous={pageContext.previous} />
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
      html
      frontmatter {
        title
        date(formatString: "M.DD.YYYY")
        description
      }
    }
  }
`
