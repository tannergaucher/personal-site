import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function avatarImg() {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Img
      fixed={file.childImageSharp.fixed}
      imgStyle={{ borderRadius: "50%" }}
    />
  )
}
