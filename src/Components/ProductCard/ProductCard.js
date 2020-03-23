import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import contentpicture from '../../asset/img/shoes.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
  },
  media: {
    height: 250,
  },
});

export default function ProductCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={contentpicture}
          title="content picture"
        />
        <CardContent>
          <Typography  variant="subtitle1" component="h4" align = "left">
           SCARPE DA GIARDINO verde
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Typography variant="body1"  > 
          $44.95
        </Typography>
        <Typography variant="body2"  >
        www.frugo.at
        </Typography>
      </CardActions>
    </Card>
  );
}