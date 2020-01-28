import React from "react"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';

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

}));

export default function AppCard({ image, 
  title, description, link, firstLinkName, secondLink, secondLinkName,
  component, src, mediaHeight, mediaWidth, icon }) {
    const classes = useStyles();
    const comp = component || "img";
    const fLinkName = firstLinkName || "Learn More"
  
  return (
    <Card className={classes.card}>
        <CardActionArea href={link} target="_blank">
            <CardMedia
                component={comp}
                alt={title}
                height="100%"
                width="100%"
                image={image}
                src={src}
                height={mediaHeight}
                width={mediaWidth}
                title={title}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {description}
                </Typography>
            </CardContent>

        </CardActionArea>
        
        <CardActions disableSpacing>
            {icon}

            <Button size="small" color="primary" 
            target="_blank"
            href={link}>
                {fLinkName}
            </Button>
    
            <Button size="small" color="primary" 
            style={secondLink ? {} : { display: 'none' }} 
            href={secondLink}>
                {secondLinkName}
            </Button>
        </CardActions>
  </Card>
  );
}
