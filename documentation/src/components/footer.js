import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GithubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: '60px',
    backgroundColor: '#f5f5f5'
  },
  gridContent: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function getDateString() {
  const now = new Date();
  return `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

function getGitRepoVersion() {
  // TODO: dynamically get version.
  return '1.0.0';
}

export default function Footer() {
  const classes = useStyles();

  const rootClassName = clsx(classes.root, 'MuiPaper-elevation4');
  return (
    <footer className={rootClassName}>
      <Grid container spacing={3}>
      <Grid item xs={3} ></Grid>
        <Grid item xs={3} >
          <div className={classes.gridContent}>
            <span>Last updated on {getDateString()}&nbsp;&nbsp;</span>
            <span>version: {getGitRepoVersion()}</span>
          </div>
        </Grid>
        <Grid item xs={3} >
          <IconButton className={classes.gridContent} onClick={() => {window.open('https://github.com/gkushang/codeceptjs-e2e', '_blank');}}>
            <GithubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
}
