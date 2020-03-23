import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandLess from "../../asset/img/arrow_down.png";
import ExpandMore from "../../asset/img/arrow_up.png";
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { Typography } from "@material-ui/core";
// import ContrySelector from './CountrySelector';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const innertheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        borderRadius: 0,
        border: 0,
        color: 'black',
        fontFamily:'Arial',
        fontSize:'10px',
        fontWeight:'bold',
        paddingRight:'20px',
       paddingLeft:'10px',

        
      },


      // text: {
      //   // Some CSS
      //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      //   borderRadius: 3,
      //   border: 0,
      //   color: 'white',
      //   height: 48,
      //   padding: '0 30px',
      //   paddingLeft:'10px',
      //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      // },
      
    },
  },
});


const useStyles = makeStyles(theme => ({
   
  menubar:{
      display:'flex',
      width:'100%',
      backgroundColor:'#EAEAEA',
      margin: 'auto',
      marginTop:'70px',
  },
  typoclass:{
    marginTop:'10px',
    marginLeft:'30px',

    flexGrow:1,
  },

  menuItem:{
    // marginRight:1,
    width:'180px',
  },
  brandItem:{
    flexGrow:5,
  },
  sortMenu:{
    flexGrow: 2,
    
  },
 
  checkBox:{

    marginTop:'-3px'
  },
  expandless:{
    width:'10px',
    height:'8px',
  }
}));




export default function MenuBar() {
    const classes = useStyles();
  return (
    <div >
         <MainMenu/>
    </div>

    
  );
}


function MainMenu() {
  const [anchorEl, setAnchorEl] = useState("");

  const handleClick = e=>
  {
    setAnchorEl(e.currentTarget);
  }
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  
  
  return (
    // <ThemeProvider theme={innertheme}>
    <div className = {classes.menubar}>

        <Grid container xs = {12}>
          <Grid item xs = {12} md = {2}>
              <Typography variant = "h6" className = {classes.typoclass} component = "h2">
                Refine your search  
              </Typography>
          </Grid>
          
          <Grid item xs = {12} md = {2} >
              <Checkbox
                color="default"
                className = {classes.checkBox}
                value="uncontrolled"
                size = "small"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />  
             <ThemeProvider theme={innertheme}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    CATEGORY
                  </Button>
              </ThemeProvider>
              
              {/* <Typography component = "button" variant = "button" align = "left">CATEGORY</Typography>  */}
              <img src = {ExpandLess} className = {classes.expandless}/>

          </Grid>
          <Grid item xs = {12} md = {2} >
              <Checkbox
                color="default"
                className = {classes.checkBox}
                value="uncontrolled"
                size = "small"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />  
             <ThemeProvider theme={innertheme}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                   <span>size   </span>    
                  </Button>
              </ThemeProvider>
              
              {/* <Typography component = "button" variant = "button" align = "left">CATEGORY</Typography>  */}
              <img src = {ExpandLess} className = {classes.expandless}/>

          </Grid>
          <Grid item xs = {12} md = {4}>
              <Checkbox
                className = {classes.checkBox}
                color="default"
                value="uncontrolled"
                size = "small"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              /> 
              <ThemeProvider theme={innertheme}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              BRAND
              </Button>
              </ThemeProvider> 
             
              
                {/* {anchorEl ? <img src = {ExpandLess} /> : <img src = {ExpandMore} />}   */}
                <img src = {ExpandLess} className = {classes.expandless}/>
          </Grid>
          <Grid item md = {10} md = {2}>
                <Checkbox
                  className = {classes.checkBox}
                  color="default"
                  value="uncontrolled"
                  size = "small"
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                  />  
                <ThemeProvider theme={innertheme}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

              Sort By
              </Button>
              </ThemeProvider> 
                <img src = {ExpandLess} className = {classes.expandless}/>
          </Grid>
        </Grid>
     
      
     

      <div className = {classes.sortMenu} >
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Leather to Love Forever Ltd</MenuItem>
        <MenuItem onClick={handleClose}>Bohomoon Ltd</MenuItem>
        <MenuItem onClick={handleClose}>Ciate Ciate</MenuItem>
        <MenuItem onClick={handleClose}>Kate's Clothing Ltd</MenuItem>
        <MenuItem onClick={handleClose}>Pink Boutique Ltd</MenuItem>
        <MenuItem onClick={handleClose}>Universal Works</MenuItem>
        <MenuItem onClick={handleClose}>Maiyo Limited</MenuItem>
        <MenuItem onClick={handleClose}>Indoi Ltd</MenuItem>
        <MenuItem onClick={handleClose}>Fatlip Limitede</MenuItem>
      </Menu>
      </div>
      
    </div>
    // </ThemeProvider>
    
  );
}