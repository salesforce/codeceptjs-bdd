import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import AppLayout from "../components/AppLayout"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  title: {
    color: "#444444",
    fontWeight: theme.typography.fontWeightMedium,
  },
  subTitle: {
    color: "#5e5e5e",
    fontWeight: theme.typography.fontWeightBold,
  },
  button: {
    marginRight: "auto",
    marginLeft: "0px",
    marginTop: 20,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
}))

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default function DocPage({ data, location, pageContext }) {
  const classes = useStyles()
  const post = data.markdownRemark
  const { next, prev } = pageContext

  return (
    <AppLayout title={post.frontmatter.title + " | Codeceptjs-BDD"}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        {post.frontmatter.title}
      </Typography>
      <Typography
        variant="overline"
        display="block"
        className={classes.subTitle}
        gutterBottom
      >
        {post.frontmatter.sub_title}
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        {renderAst(post.htmlAst)}
      </Typography>

      <Divider style={{ marginTop: 50 }} />

      {prev && (
        <Button
          className={classes.button}
          style={{ float: "left" }}
          color="primary"
          startIcon={<NavigateBeforeIcon />}
          href={prev.fields.slug}
        >
          {prev.frontmatter.title}
        </Button>
      )}

      {next && (
        <Button
          className={classes.button}
          style={{ float: "right" }}
          color="primary"
          endIcon={<NavigateNextIcon />}
          href={next.fields.slug}
        >
          {next.frontmatter.title}
        </Button>
      )}
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        sub_title
        keywords
      }
    }
  }
`
