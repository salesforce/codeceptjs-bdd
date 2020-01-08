import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layout';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    // This is the mapping when you want to create custom components embedded in the markdown file
  }
}).Compiler;

export default function DocPage({ data, location }) {
  const post = data.markdownRemark;

  return (
    <Layout title={post.frontmatter.title + ' | ' + data.site.siteMetadata.title} location={location}>
      <h1 id="article-title">{post.frontmatter.title}</h1>
      <article className="doc-article">
        {renderAst(post.htmlAst)}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;
