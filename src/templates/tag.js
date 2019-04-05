import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Styled = styled.div``

export default function tag({ data, location, pageContext }) {
  console.log(data)
  return (
    <Styled>
      <Layout location={location}>
        <h3>{pageContext.fieldValue}</h3>
      </Layout>
    </Styled>
  )
}

export const tagQuery = graphql`
  query tagsQuery($fieldValue: String!) {
    # TODO: better name: change $fieldvalue to $tag
    allMarkdownRemark(filter: { fields: { tags: { eq: $fieldValue } } }) {
      # re-use a fragment here
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
