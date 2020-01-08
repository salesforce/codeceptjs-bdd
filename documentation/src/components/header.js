import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textContent: {
    marginLeft: theme.spacing(2),
  },
  textLink: {
    textDecoration: 'none',
    color: 'black',
  }
}));

export default function Header({ siteTitle, siteDescription }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <h1 className={classes.textContent}><Link className={classes.textLink} to="/">{siteTitle}</Link></h1>
        <p className={classes.textContent}>{siteDescription}</p>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
