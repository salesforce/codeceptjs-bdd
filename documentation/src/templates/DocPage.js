import React from 'react';
import {graphql} from 'gatsby';
import rehypeReact from 'rehype-react';
import AppLayout from '../components/AppLayout';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    title: {
        color: '#444444',
        fontWeight: theme.typography.fontWeightMedium,
    },
    subTitle: {
        color: '#5e5e5e',
        fontWeight: theme.typography.fontWeightBold,
    },

}));

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
    }
}).Compiler;

export default function DocPage({data, location}) {
    const classes = useStyles();
    const post = data.markdownRemark;

    return (
        <AppLayout title={post.frontmatter.title + ' | ' + data.site.siteMetadata.title} location={location}>
            <Typography variant="h4" className={classes.title} gutterBottom>
                {post.frontmatter.title}
            </Typography>
            <Typography variant="overline" display="block" className={classes.subTitle} gutterBottom>
                {post.frontmatter.sub_title}
            </Typography>
            <Divider/>
            <Typography variant="body1" gutterBottom>
                {renderAst(post.htmlAst)}
            </Typography>
        </AppLayout>
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
        sub_title
        keywords
      }
    }
  }
`;
