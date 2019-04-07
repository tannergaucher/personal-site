import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const Styled = styled.div``

export default function tag({ location, pageContext }) {
  return (
    <Styled>
      <Layout location={location}>
        <h2>Tags</h2>
      </Layout>
    </Styled>
  )
}
