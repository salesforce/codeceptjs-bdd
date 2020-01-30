import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import slugify from 'slugify';
import TreeNavigation from './TreeNavbar'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[200]})`,
    boxShadow: '1px 1px 8px lightgray',
    width: drawerWidth,
  },
  treeNavigator: {
    margin: '10px',
    padding: '10px',
  },
  toolbar: theme.mixins.toolbar,
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
          className={classes.toolbar}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
      >
        <div className={classes.toolbar} />

        <Divider />
        <div className={classes.treeNavigator}>
          <TreeNavigation treeItems={navigationTreeItems} />
        </div>
      </Drawer>
  );
}
