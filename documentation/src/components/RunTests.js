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

function runCommands(options) {
  return (
    <div style={{ paddingTop: '14px' }}>
      <span style={{ color: '#9999FF', fontWeight: 'bold' }}>
        {' '}
        {options.title}{' '}
      </span>
      {/* <br /> */}
      <span style={{ color: '#929D9D', fontSize: '0.7em' }}>
        {' '}
        {/* // [--profile chrome|firefox|safari]{' '} */}
      </span>
      <br />
      <span style={{ color: '#e1e31a' }}>$ </span>
      <span style={{ color: 'white' }}>yarn ui:test </span>
      <span style={{ color: '#ffe59a' }}>--profile {options.profile} </span>
    </div>
  );
}
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
          Run tests on various platforms with Single CLI command:
          <span
            style={{
              color: '#253C3C',
              fontSize: '0.9em',
              fontFamily: 'monospace, monospace, monospace',
              fontWeight: '500',
            }}
          >
            {' '}
            Locally, Sauce Labs, Selenoid Grid, Appium, and with Playwright:
            Mobile /Tablet /Desktop browsers.{' '}
          </span>
        </div>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper
            elevation={8}
            style={{
              backgroundColor: '#191953',
              height: '32em',
              fontColor: 'yelllow',
            }}
          >
            <Hidden smUp>
              <div
                style={{
                  color: '#e1e31a',
                  fontSize: '12px',
                  marginTop: '5px',
                  fontFamily: 'monospace, monospace, monospace',
                  paddingTop: '1.7em',
                  paddingLeft: '10px',
                  overflow: 'scroll',
                  whiteSpace: 'normal',
                }}
              >
                {runCommands({ title: 'Locally', profile: 'chrome' })}
                {/* -- */}
                <br />
                {runCommands({
                  title: 'Playwright Mobile/Tablet Devices',
                  profile: "device:'iPhone 11':safari",
                })}
                <br />
                {runCommands({
                  title: 'Sauce Labs',
                  profile: "sauce:config:'macOS 10.15':safari:13.",
                })}
                <br />
                {runCommands({
                  title: 'Selenoid Grid',
                  profile: 'selenoid:chrome:80',
                })}
                <br />
                {runCommands({
                  title: 'Appium',
                  profile: 'sauce:appium:androidchrome',
                })}
              </div>
            </Hidden>

            <Hidden xsDown>
              <div
                style={{
                  color: '#e1e31a',
                  fontSize: '1.2em',
                  marginTop: '5px',
                  fontFamily: 'monospace, monospace, monospace',
                  paddingTop: '0.9em',
                  paddingLeft: '1em',
                }}
              >
                {runCommands({ title: 'Locally', profile: 'chrome' })}
                {/* -- */}
                <br />
                {runCommands({
                  title: 'Playwright Mobile/Tablet Devices',
                  profile: "device:'iPhone 11':safari",
                })}
                <br />
                {runCommands({
                  title: 'Sauce Labs',
                  profile: "sauce:config:'macOS 10.15':safari:13.",
                })}
                <br />
                {runCommands({
                  title: 'Selenoid Grid',
                  profile: 'selenoid:chrome:80',
                })}
                <br />
                {runCommands({
                  title: 'Appium',
                  profile: 'sauce:appium:androidchrome',
                })}
              </div>
            </Hidden>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
