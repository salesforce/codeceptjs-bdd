const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

    result.data && result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
                       path: node.fields.slug,
                       component: path.resolve('./src/templates/DocPage.js'),
        context: {
        slug: node.fields.slug
    }
});
});
};
