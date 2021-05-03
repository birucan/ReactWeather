import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Content(props){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    if(props.pageState === "weather"){
        return <h1>Weather test</h1>
    }
    if (props.pageState === "licenses"){
        return     <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Icon Licenses
          </Typography>
          <Typography variant="h5" component="h2">
            Weather Icons
          </Typography>
          <Typography variant="body2" component="p">
          <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <br />
           
          </Typography>
        </CardContent>

        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Icon Licenses
          </Typography>
          <Typography variant="h5" component="h2">
            Github Icon
          </Typography>
          <Typography variant="body2" component="p">
          <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <br />
           
          </Typography>
        </CardContent>


        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Icon Licenses
          </Typography>
          <Typography variant="h5" component="h2">
            Licenses Icon
          </Typography>
          <Typography variant="body2" component="p">
          <div>Icons made by <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">wanicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <br />
           
          </Typography>
        </CardContent>


      </Card>
    }


}

export {Content}