const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC },
          ${
            process.env.NODE_ENV === "production"
              ? "filter: {frontmatter: {draft: {ne: true}}}"
              : ""
          },
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
        tags: allMarkdownRemark {
          group(field: fields___tags){
            fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { edges: posts } = result.data.posts
    const tags = result.data.tags.group

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    tags.forEach(tag => {
      const { fieldValue } = tag
      createPage({
        path: `/tags/${_.kebabCase(fieldValue)}`,
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          fieldValue,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      node,
      name: `draft`,
      value: node.frontmatter.draft,
    })

    createNodeField({
      node,
      name: `tags`,
      value: node.frontmatter.tags,
    })
  }
}
