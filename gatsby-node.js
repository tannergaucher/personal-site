const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
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
          group(field: frontmatter___tags) {
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

    posts.forEach(post => {
      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: post.node.fields.slug,
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
