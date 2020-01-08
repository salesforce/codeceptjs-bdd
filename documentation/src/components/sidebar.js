import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import slugify from 'slugify';

import logo from '../images/codecept-e2e-logo.jpg';
import TreeNavigation from './treeNavigation'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  logoSection: {
    margin: '10px',
    height: '105px',
  },
  treeNavigator: {
    margin: '10px',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const convertNodesToTree = items => {
  const result = [];
  items.forEach(item => {
    let node = result;
    // if the current item has parents.
    if (item.frontmatter.parents) {
      item.frontmatter.parents.forEach( (parent, index) => {
        let parentNode = node.find(n => n.label === parent);
        if (!parentNode) {
          parentNode = {
            label: parent,
            children: [],
            key: slugify([...item.frontmatter.parents.slice(0, index), parent].join(' ')),
            nodeId: slugify([...item.frontmatter.parents.slice(0, index), parent].join(' '))
        };
        node.push(parentNode);
      }

      if (!parentNode.children) {
        parentNode.children = [];
      }

      node = parentNode.children;

      });
    }

    const key = slugify(item.frontmatter.parents ? [...item.frontmatter.parents, item.frontmatter.title].join(' ') : item.frontmatter.title);

    const existingItem = node.find(item => item.key === key);

  if (existingItem) {
    existingItem.label = item.frontmatter.title;
    existingItem.href = item.fields.slug;
  } else {
    node.push({
      label: item.frontmatter.title,
      href: item.fields.slug,
      key,
      nodeId: key
    });
  }

  });
  return result;
};

export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      allMarkdownRemark(sort: { order: ASC, fields: [fileAbsolutePath] }) {
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
  `);

  const navigationTreeItems = convertNodesToTree(data.allMarkdownRemark.nodes);
  const classes = useStyles();
  return (
      <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
      >
        <Link className={classes.logoSection} to="/">
          <img className={classes.image} src={logo} alt="codeceptjs e2e logo" />
        </Link>
        <Divider />
        <div className={classes.treeNavigator}>
          <TreeNavigation treeItems={navigationTreeItems} />
        </div>
      </Drawer>
  );
}

