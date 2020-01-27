import React from "react"
import AppLayout from "../components/AppLayout"
import { makeStyles } from '@material-ui/core/styles';
import image404 from "../images/404-1.png";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  },

  card: {
    height: '100%',
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 18,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  arch: {
    paddingTop: 30
  },

  divImage: {
   paddingTop: 100
  },

  image: {
    height: '100%',
    width: '100%'
  }
}));


const NotFoundPage = () => {

  const classes = useStyles();
  return (
  <AppLayout>
    <Grid container spacing={5}>
    <Grid item xs={4}>
      <div className={ classes.divImage }>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className={ classes.divImage }>
        <img className={classes.image} src={image404} alt="Not Found"/>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className={ classes.divImage }>
      </div>
    </Grid>
    </Grid>

  </AppLayout>
);};

export default NotFoundPage
