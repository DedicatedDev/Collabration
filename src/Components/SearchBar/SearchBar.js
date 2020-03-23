import React from 'react';
import { makeStyles, theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',

    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },

    divider: {
      height: 28,
      margin: 4,
    },
   
  }),
);

export default function SerchBar(){
  const classes = useStyles();

  return(
         <Grid container  xs = {12} justify = "center" alignItems = "center" >
           <Grid xs = {10} md = {6}>
            <Paper component="form" className={classes.root} >
              <InputBase
                className={classes.input}
                placeholder="What are you looking for?"
                inputProps={{ 'aria-label': 'What are you looking for?' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search" component = {Link} to="/product">
                <SearchIcon />
              </IconButton>
              <Divider className={classes.divider} orientation="vertical" />
            </Paper>
            
            </Grid>
       
           </Grid>
      
  );

}
