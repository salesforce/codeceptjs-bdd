import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { makeStyles } from "@material-ui/core/styles"
import { Helmet } from "react-helmet"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  siteContainer: {
    height: "100%",
  },
  bodyContainer: {
    height: "100%",
    display: "flex",
  },
  headerAndContent: {
    marginBottom: "72px",
  },
  mainSection: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function AppLayout({ children, title }) {
  const classes = useStyles()
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
           <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
          </Helmet>
          <div className={classes.bodyContainer}>
            <main className={classes.mainSection}>
              <div className={classes.toolbar} />
              <div className={classes.headerAndContent}>
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  siteDescription={data.site.siteMetadata.description}
                />
                <main className={classes.content}>{children}</main>
              </div>
            </main>
          </div>
        </div>
      )}
    />
  )
}

AppLayout.propTypes = {
  title: PropTypes.string,
}
