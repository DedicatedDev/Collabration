import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandLess from "../../asset/img/arrow_down.png";
import ExpandMore from "../../asset/img/arrow_up.png";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
// import  DeleteIcon from '@material-ui/icons';
import Clear from '@material-ui/icons/Clear'
import ArrowUpward from '@material-ui/icons/ArrowUpward';



import { makeStyles } from '@material-ui/core/styles';

import { Typography, Collapse, Hidden } from "@material-ui/core";
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
        fontWeight:'bo.ld',
        paddingRight:'20px',
       paddingLeft:'10px',

        
      },

      submenu: {
        borderRadius: "0px",
        width:'100%',
        height:300
      }
      
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
    flexGrow:1
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
    // marginTop:'-3px'
  },
  expandless:{
    width:'10px',
    height:'8px',
  },
  submenu :{
    width:'80%',
    height:'30%',
    margin:'auto'
  },
  buttonstyle:{
    textAlign:'left'
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

const categories = [
  'Bohomoon Ltd',
  'Ciate Ciate',
  'Kates Clothing Ltd',
  'Pink Boutique Ltd',
  'Univeral Works',
  'Maiyo Limited',
  'Indoi Ltd',
  'Fatlip Limitede',
  'Bohomoon Ltd',
  'Ciate Ciate',
  'Kates Clothing Ltd',
  'Pink Boutique Ltd',
  'Univeral Works',
  'Maiyo Limited',
  'Indoi Ltd',
  'Fatlip Limitede'
];

const sortby = ['Relevance','Price(row to high)','Price(row to high)']
const sizes = ['small','middle','big','extra-big']
const brands  = ['ARMANI','FENDI','HOUSE OF VERSACE','BURBERRY','RALPH LAUREN','CHANEL','PRADA','HERMES','GUCCI','LOUIS VUITTON']
 
function MainMenu() {
  const [anchorEl, setAnchorEl] = useState("");

  const [state, setState] = React.useState({
    categoryFlag: false,
    sizeFlag: false,
    brandFlag: false,
    sortByFlag: false,
    submenuCheked:false,
    totalFlag:false,
    key:0,
    directionImg:ExpandLess,
    directionImgC:ExpandLess,
    directionImgS:ExpandLess,
    directionImgB:ExpandLess,
    directionImgSo:ExpandLess,
    
  });

  const handleClick = e=>
  {
    // setAnchorEl(e.currentTarget);
    // setState({categoryFlag:true})
  }


  const toggleDrawer = (selectedcheckbox, open) => e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    if(open){
      setState({ ...state,[selectedcheckbox]: open,directionImg: ExpandMore});
    } else{
      setState({ ...state,[selectedcheckbox]: open,directionImg: ExpandLess});
    }
    
  };

  const toggleMobileDrawer = (selectedcheckbox, open) => e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    if(open){
      setState({ ...state,[selectedcheckbox]: open});
    } else{
      setState({ ...state,[selectedcheckbox]: open});
    }
    if(selectedcheckbox = 'categoryFlag'){
      setState({ ...state,[selectedcheckbox]: open,directionImgC: ExpandMore});
    } else{
      setState({ ...state,[selectedcheckbox]: open,directionImgC: ExpandLess});
    }

    if(selectedcheckbox = 'sizeFlag'){
      setState({ ...state,[selectedcheckbox]: open,directionImgS: ExpandMore});
    } else{
      setState({ ...state,[selectedcheckbox]: open,directionImgS: ExpandLess});
    }

    if(selectedcheckbox = 'brandFlag'){
      setState({ ...state,[selectedcheckbox]: open,directionImgB: ExpandMore});
    } else{
      setState({ ...state,[selectedcheckbox]: open,directionImgB: ExpandLess});
    }

    if(selectedcheckbox = 'sortByFlag'){
      setState({ ...state,[selectedcheckbox]: open,directionImgSo: ExpandMore});
    } else{
      setState({ ...state,[selectedcheckbox]: open,directionImgSo: ExpandLess});
    }


    
    
  };

  const submenuClick = e =>{
    setState({ ...state, submenuCheked: !state.submenuCheked&&state.totalFlag });
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  
  return (
    
     <div>
        <Hidden mdDown>

              <div className = {classes.menubar}>

              <Grid container xs = {12}>
                <Grid item xs = {12} md = {2}>
                    <Typography variant = "h6" className = {classes.typoclass} component = "h2">
                      Refine your search  
                    </Typography>
                    <Collapse in = {state.totalFlag}>
                      <IconButton aria-label="delete" style = {{float:'left'}} onClick = {toggleDrawer('totalFlag', false)}>
                                <Clear/>
                      </IconButton>
                    </Collapse>
                  
                </Grid>
                
                <Grid item xs = {12} md = {2} >
                    <div>
                        <Checkbox
                            color="default"
                            className = {classes.checkBox}
                            value="uncontrolled"
                            size = "small"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <ThemeProvider theme={innertheme}>
                              <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={toggleDrawer('totalFlag',true)}>
                                CATEGORY
                              </Button>
                          </ThemeProvider>
                          
                          {/* <Typography component = "button" variant = "button" align = "left">CATEGORY</Typography>  */}
                          <img src = {state.directionImg} className = {classes.expandless}/>
                    </div>
                    <div>
                        <Collapse in = {state.totalFlag} timeout = {1000}>
                            <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:300}}>
                            {categories.map(category => ( 
                              
                                <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={category} style = {{marginLeft:10}} />
                              
                            ))}
                            </GridList>
                        </Collapse>
                    </div>
                </Grid>

                <Grid item xs = {12} md = {2} >
                  <div>
                  <Checkbox
                      color="default"
                      className = {classes.checkBox}
                      value="uncontrolled"
                      size = "small"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />  
                      <ThemeProvider theme={innertheme}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={toggleDrawer('totalFlag',true)}>
                            <span>size   </span>    
                            </Button>
                        </ThemeProvider>
                        <img src = {state.directionImg} className = {classes.expandless}/>
                  </div>

                
                  <div>
                      <Collapse in = {state.totalFlag} timeout = {1000}>
                          <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:140}}>
                          {sizes.map(size => ( 
                              <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={size} style = {{marginLeft:10}} />
                            ))}
                          </GridList>
                      </Collapse>
                    </div>

                </Grid>

                <Grid item xs = {12} md = {4}>
                    <div>
                        <Checkbox
                          className = {classes.checkBox}
                          color="default"
                          value="uncontrolled"
                          size = "small"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        /> 
                        <ThemeProvider theme={innertheme}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={toggleDrawer('totalFlag', true)}>
                        BRAND
                        </Button>
                        </ThemeProvider> 
                      
                          {/* {anchorEl ? <img src = {ExpandLess} /> : <img src = {ExpandMore} />}   */}
                          <img src = {state.directionImg} className = {classes.expandless}/>
                    </div>
                      <div>
                      
                        <Collapse in = {state.totalFlag} timeout = {1000}>
                              
                            <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:290}}>
                            {brands.map(brand => ( 
                              
                                <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={brand} style = {{marginLeft:10}} />
                                
                              ))}
                            </GridList>
                        </Collapse>
                      
                      </div>

                </Grid>
                <Grid item md = {10} md = {2}>
                      <div>
                          <Checkbox
                            className = {classes.checkBox}
                            color="default"
                            value="uncontrolled"
                            size = "small"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />  
                          <ThemeProvider theme={innertheme}>
                          <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={toggleDrawer('totalFlag',true)}>
                          Sort By
                          </Button>
                          </ThemeProvider> 
                          <img src = {state.directionImg} className = {classes.expandless}/>
                      </div>

                      <div>
                      
                        <Collapse in = {state.totalFlag} timeout = {1000}>
                              
                            <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:101}}>
                            {sortby.map(sort => ( 
                              
                                <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={sort} style = {{marginLeft:10}} />
                                
                              ))}
                            </GridList>
                        </Collapse>
                      
                      </div>
                      
                      
                </Grid>
              </Grid>
              </div>


        </Hidden>
        <Hidden smUp>

      <div className = {classes.menubar}>

          <Grid container xs = {12}>
            <Grid item xs = {12} md = {2}>
                <Typography variant = "h6" className = {classes.typoclass} component = "h2">
                  Refine your search  
                </Typography>
                <Collapse in = {state.totalFlag}>
                  <IconButton aria-label="delete" style = {{float:'left'}} onClick = {toggleDrawer('totalFlag', false)}>
                            <Clear/>
                  </IconButton>
                </Collapse>
              
            </Grid>
            
            <Grid item xs = {12} md = {2} >
                <div>
                    <Checkbox
                        color="default"
                        className = {classes.checkBox}
                        value="uncontrolled"
                        size = "small"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />  
                    <ThemeProvider theme={innertheme}>
                          <Button aria-controls="simple-menu" aria-haspopup="true" onClick ={toggleDrawer('categoryFlag', !state.categoryFlag)}>
                            CATEGORY
                          </Button>
                      </ThemeProvider>
                      
                      {/* <Typography component = "button" variant = "button" align = "left">CATEGORY</Typography>  */}
                      <img src = {state.directionImgC} className = {classes.expandless}/>
                </div>
                <div>
                    <Collapse in = {state.categoryFlag} timeout = {1000}>
                        <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:300}}>
                        {categories.map(category => ( 
                          
                            <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={category} style = {{marginLeft:10}} />
                          
                        ))}
                        </GridList>
                    </Collapse>
                </div>
            </Grid>

            <Grid item xs = {12} md = {2} >
              <div>
              <Checkbox
                  color="default"
                  className = {classes.checkBox}
                  value="uncontrolled"
                  size = "small"
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                />  
                  <ThemeProvider theme={innertheme}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={toggleDrawer('sizeFlag',!state.sizeFlag)}>
                        <span>size   </span>    
                        </Button>
                    </ThemeProvider>
                    <img src = {state.directionImgS} className = {classes.expandless}/>
              </div>
  
              <div>
                  <Collapse in = {state.sizeFlag} timeout = {1000}>
                      <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:140}}>
                      {sizes.map(size => ( 
                          <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={size} style = {{marginLeft:10}} />
                        ))}
                      </GridList>
                  </Collapse>
                </div>

            </Grid>

            <Grid item xs = {12} md = {4}>
                <div>
                    <Checkbox
                      className = {classes.checkBox}
                      color="default"
                      value="uncontrolled"
                      size = "small"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    /> 
                    <ThemeProvider theme={innertheme}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={toggleDrawer('brandFlag', !state.brandFlag)}>
                    BRAND
                    </Button>
                    </ThemeProvider> 
                  
                      {/* {anchorEl ? <img src = {ExpandLess} /> : <img src = {ExpandMore} />}   */}
                      <img src = {state.directionImgB} className = {classes.expandless}/>
                </div>
                  <div>
                  
                    <Collapse in = {state.brandFlag} timeout = {1000}>
                          
                        <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:290}}>
                        {brands.map(brand => ( 
                          
                            <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={brand} style = {{marginLeft:10}} />
                            
                          ))}
                        </GridList>
                    </Collapse>
                  
                  </div>

            </Grid>
            <Grid item md = {10} md = {2}>
                  <div>
                      <Checkbox
                        className = {classes.checkBox}
                        color="default"
                        value="uncontrolled"
                        size = "small"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />  
                      <ThemeProvider theme={innertheme}>
                      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={toggleDrawer('sortByFlag',!state.sortByFlag)}>
                      Sort By
                      </Button>
                      </ThemeProvider> 
                      <img src = {state.directionImgSo} className = {classes.expandless}/>
                  </div>

                  <div>
                  
                    <Collapse in = {state.sortByFlag} timeout = {1000}>
                          
                        <GridList cellHeight={30} spacing={1} cols = {1} style = {{height:101}}>
                        {sortby.map(sort => ( 
                          
                            <FormControlLabel control={<Checkbox name="checkedC" size = "small" />} label={sort} style = {{marginLeft:10}} />
                            
                          ))}
                        </GridList>
                    </Collapse>
                  
                  </div>
                  
                  
            </Grid>
          </Grid>
          </div>               


      </Hidden>
      </div>
  
    
  );
}