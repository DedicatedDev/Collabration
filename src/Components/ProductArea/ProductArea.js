
import React, { useState } from "react";
import { makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'


import contentpicture from '../../asset/img/shoes.jpg';

const useStyles = makeStyles(theme => ({
    list: {
      width: 500,
    },
    fullList: {
      width: 'auto',
    },
    productArea: {
        flexGrow: 1,
        width:'100%',
        margin:'auto',
       
    },

    
    root: {
        maxWidth: '100%',
      },
      media: {
        height: 250,
      },
      urlInfo:{
       
        marginLeft:15,
        marginBottom:20, 
      },
      priceInfo:{
        marginTop:-15,
        marginLeft:15,

      },
      icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
  }));

   const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12];

export default function ProdcutArea(){
const classes = useStyles();

return (


  <div className={classes.productArea}>
    
    <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <ProductCard/>
              </Grid>
            ))}
          </Grid>
        </Container>
    
  </div>
);

}
  function ProductCard() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const [value, setValue] = React.useState(2);

  
    const toggleDrawer = (open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState(open);
    };
  
    return (
      <div> <Card className={classes.root} elevation={3}>
            <CardActionArea onClick = {toggleDrawer(true)}>
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
            </CardActionArea >
            
            
              <Typography variant="body1" align = {"left"} className = {classes.priceInfo}> 
                $44.95
              </Typography>
              <Typography variant="body2" align = {"left"} className = {classes.urlInfo}>
              www.frugo.at
              </Typography>
          
          </Card>
              <Drawer anchor = {'right'} open={state} onClose={toggleDrawer(false)}>
                <div
                  className={classes.list}
                  role="presentation"
                  // onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  >
                  
                  <Card className={classes.root}>
                  
                    <CardMedia
                      className={classes.media}
                      image={contentpicture}
                      title="Paella dish"
                    />
                    <CardHeader
                      
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      It’s a well made case it’s nice and solid thing I don’t like is the bottom where I place my pinky it feels jaggerd when I’m texting and it leaves marks on my finger.                      </Typography>
                      <Grid container xs = {12}>
                        <Grid>
                        <Rating name="read-only" value={value} readOnly />
                        </Grid>
                        <Grid>
                        <Typography>$49.5</Typography>
                        </Grid>
                        <Grid>

                        </Grid>
                      </Grid>

                      <Box component="fieldset" mb={3} borderColor="transparent">
                      </Box>
                    </CardContent>
                    <CardActions disableSpacing>
                      
                    </CardActions>
              
              </Card>
           </div>
        </Drawer>
      </div>
     
    );
  }
