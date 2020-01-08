/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    siteContainer: {
        height: '100%',
    },
    bodyContainer: {
        height: '100%',
        display: 'flex',
    },
    headerAndContent: {
      marginBottom: '72px',
    },
    mainSection: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    pageContent: {
        padding: '1em',
        flexGrow: 1,
    }
}));

export default function Layout({ children, location }) {
    const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <div className={classes.siteContainer}>
          <div className={classes.bodyContainer}>
            <Sidebar location={location} />
            <main className={classes.mainSection}>
                <div className={classes.headerAndContent}>
                    <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
                    <div className={classes.pageContent}>{children}</div>
                </div>
              <Footer />
            </main>
          </div>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
