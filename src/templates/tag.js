import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

const Styled = styled.div``

export default function tag({ data, location, pageContext }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Styled>
      <Layout location={location}>
        <h3>#{pageContext.fieldValue}</h3>
        {posts.map(({ node }) => (
          <Card node={node} key={node} />
        ))}
      </Layout>
    </Styled>
  )
}

export const tagQuery = graphql`
  query tagsQuery($fieldValue: String!) {
    allMarkdownRemark(filter: { fields: { tags: { eq: $fieldValue } } }) {
      edges {
        node {
          ...CardFragment
        }
      }
    }
  }
`
