import React from "react"
import AppLayout from "../components/AppLayout"
import { makeStyles } from '@material-ui/core/styles';
import image404 from "../images/404.png";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
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
