import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
// import Link from '@material-ui/core/Link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Home from '../../Pages/HomePage.js';
import Logo from '../../asset/img/Logo.png';
// import ContrySelector from './CountrySelector';


const useStyles = makeStyles(theme => ({
  rightMenu: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(1),

    },
    textTransform:'none',
    fontStyle:'normal',
    fontWeight:'normal',
    marginTop:11,
  },

  appbar:{
    boxShadow:'none',
    width:'100%',
    margin:'auto',
    // minWidth:'980px',
    maxWidth:'1284px',
  },

  topmenu: {
    
      marginLeft: theme.spacing(2),
  },

  logoFont: {
    position: 'absolute',
    display:'flex',
  //  width:'50%',
    marginTop:-30,
    marginLeft:'auto',
    marginRight:'auto',
    width:'700px',
    height:'100px',
    left:'50%',
    transform: 'translate(-50%, 0)',
    alignItems:'flex-end',

  },


  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },

  searchiconbut:{
    position:'absolute',
    left:'100%',
    transform:'translate(-100%,0)',
    marginTop:50,
    '&:hover':{
      background: 'none',
    },

  },

  menuContainer: {
    display:'flex',
    marginTop:10,
  },
  leftmenu:{
    marginTop:11,
   
  },
  countryButton:{
    textTransform:'none',
    fontStyle:'normal',
    fontWeight:'normal',

  },
  logoLargebold:{
    marginLeft:15,
  },
  logoSmall:{
    marginLeft:5,
  },
  searchText:{
    marginRight:10,
  }
  
}));

export default function ProminentAppBar() {
  const classes = useStyles();
  // const preventDefault = (event: sss) => event.preventDefault();
  const preventDefault = "sss";

  return (
    <div >
      <AppBar position="static" className={classes.appbar}>
          {/* <ContrySelector/> */}
         
        <div className={classes.menuContainer}>
            <Typography  align = "left" variant ="h5" className = {classes.leftmenu}>
              Shop in: 
            </Typography>
            <CountrySelect/>
            <Router>
              <Typography variant = "h6" className={classes.rightMenu} align = "right">
                  <Link to="/home"  >
                    Home  |
                  </Link>
                  <Link to="/"  >
                    About Us  |
                  </Link>
                  <Link to="/faq">
                    FAQ  |
                  </Link>
                  <Link to="/add_feed">
                    Add Feed  |
                  </Link>
                  <Link to="/retailers">
                    Retailers
                  </Link>
            </Typography>
            <Switch>
            <Route path="/">
                <Home/>
              </Route>
              <Route path="/home">
              </Route>

            </Switch>
        </Router>
        </div>

        <Toolbar className={classes.toolbar}>
          {/* <img src = {Logo} className = {classes.logosize}/> */}
          <div className={classes.logoFont}>
          <Typography  align = "left" variant ="h1" className = {classes.logoLarge}>
              We are
            </Typography>
            
            <Typography  align = "left" variant ="h2" className = {classes.logoLargebold}>
              Polymer.
            </Typography>
            <Typography  align = "left" variant ="h3" className = {classes.logoSmall}>
              SHOP
            </Typography>
         

          </div>
          <IconButton aria-label="search"
          color="inherit" 
          className ={classes.searchiconbut}
          disableRipple
          disableTouchRipple
          disableFocusRipple
          
          >
          <Typography variant = "h6" className ={classes.searchText}>Search</Typography>
            <SearchIcon />
          </IconButton>

        </Toolbar>


      </AppBar>
    </div>
  );
}

function CountrySelect() {
  const [anchorEl, setAnchorEl] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (

   
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className = {classes.countryButton}>
        United Kingdom
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Czech Republic</MenuItem>
        <MenuItem onClick={handleClose}>Poland</MenuItem>
        <MenuItem onClick={handleClose}>Greece</MenuItem>
        <MenuItem onClick={handleClose}>Hungary</MenuItem>
        <MenuItem onClick={handleClose}>Romania</MenuItem>
        <MenuItem onClick={handleClose}>Austria</MenuItem>
        <MenuItem onClick={handleClose}>Ireland</MenuItem>
        <MenuItem onClick={handleClose}>Belgium</MenuItem>
        <MenuItem onClick={handleClose}>Spain</MenuItem>
        <MenuItem onClick={handleClose}>Italy</MenuItem>
        <MenuItem onClick={handleClose}>France</MenuItem>
        <MenuItem onClick={handleClose}>Netherlands</MenuItem>
        <MenuItem onClick={handleClose}>Germany</MenuItem>
        <MenuItem onClick={handleClose}>United Kingdom</MenuItem>
        
      </Menu>
    </div>
  );
}
