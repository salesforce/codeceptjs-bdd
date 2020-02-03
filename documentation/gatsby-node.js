const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark (sort: { order: ASC, fields: [fileAbsolutePath] }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            parents
          }
        }
      }
    }
  `)

  if (result.data) {
    const posts = result.data.allMarkdownRemark.nodes;
    console.log('posts: ', posts);
    posts.forEach(({fields,frontmatter}, index) => {
      createPage({
        path: fields.slug,
        component: path.resolve("./src/templates/DocPage.js"),
        context: {
          slug: fields.slug,
          prev: {
            fields: index === 0 ? null : posts[index - 1].fields,
            frontmatter: index === 0 ? null : posts[index - 1].frontmatter
          },
          next: {
            fields: index === posts.length - 1 ? null : posts[index + 1].fields,
            frontmatter: index === posts.length -1 ? null : posts[index + 1].frontmatter
          }
        },
      })
    })
  }
}
