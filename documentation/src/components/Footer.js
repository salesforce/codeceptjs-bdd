import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    position: 'sticky',
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
  return '1.0.0';
}

export default function Footer() {
  const classes = useStyles();

  const rootClassName = clsx(classes.root, 'MuiPaper-elevation4');
  return (
    <footer className={rootClassName}>
      <Grid container spacing={3}>
      <Grid item xs={3} ></Grid>
        <Grid item xs={5} >
          <div className={classes.gridContent}>
            <span>Last updated on {getDateString()}&nbsp;&nbsp;</span>
          </div>
        </Grid>
        <Grid item xs={3} >

        </Grid>
      </Grid>
    </footer>
  );
}
