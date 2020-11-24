import React, { useMemo, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },

  listSearchResults: {
    background: `#FFFFFF`,
    border: `1px solid $color-border-brand-dark`,
    minWidth: `30rem`,
    maxHeight: `30rem`,
    overflowY: `auto`,
    padding: `0.5rem`,
    position: `absolute`,
    marginTop: 7,
    right: '0 !important',
    left: 'inherit !important',
    borderRadius: '4px',
    boxShadow: '0 1px 0 0 rgba(0,0,0,.2), 0 2px 3px 0 rgba(0,0,0,.3)',
  },

  noMatches: {
    textAlign: 'center',
    margin: '0.5rem',
    fontSize: 17,
    color: 'red',
  },
}));

export default function CreateTests() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h6"
        color="gray"
        display="block"
        className={classes.title}
        gutterBottom
      >
        <div
          style={{
            color: '#2F4B4B',
            fontSize: '0.85em',
            fontFamily:
              'helveticaneue-light, helvetica neue light, helvetica neue, Helvetica, Arial, lucida grande, sans-serif',
            marginTop: '1px',
          }}
        >
          Quickly create your Codeceptjs-BDD Acceptance tests through open
          source
          <span
            style={{
              color: '#253C3C',
              fontSize: '1em',
              fontFamily: 'monospace, monospace, monospace',
              fontWeight: '500',
            }}
          >
            {' '}
            create-codecepjts-bdd-tests{' '}
          </span>
          tool.
        </div>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper
            elevation={8}
            style={{
              backgroundColor: '#2F4B4B',
              height: '5em',
              fontColor: 'yelllow',
            }}
          >
            <Hidden smUp>
              <div
                style={{
                  color: '#e1e31a',
                  fontSize: '14px',
                  marginTop: '5px',
                  fontFamily: 'monospace, monospace, monospace',
                  paddingTop: '1.7em',
                  paddingLeft: '10px',
                  overflowX: 'scroll',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ color: '#e1e31a' }}>$ </span>
                <span style={{ color: 'white' }}>npx </span>
                <span style={{ color: '#ffe59a' }}>
                  create-codeceptjs-bdd-tests{' '}
                </span>
              </div>
            </Hidden>

            <Hidden xsDown>
              <div
                style={{
                  color: '#e1e31a',
                  fontSize: '1.7em',
                  marginTop: '5px',
                  fontFamily: 'monospace, monospace, monospace',
                  paddingTop: '0.8em',
                  paddingLeft: '1em',
                }}
              >
                <span style={{ color: '#e1e31a' }}>$ </span>
                <span style={{ color: 'white' }}>npx </span>
                <span style={{ color: '#ffe59a' }}>
                  create-codeceptjs-bdd-tests{' '}
                </span>
              </div>
            </Hidden>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
