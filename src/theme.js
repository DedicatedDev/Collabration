import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#FFF',
      main: '#1a1919',
      light:'#EDDFDF',
      dark:'#CECECE',
      contrastText:'#1A1919'
    },
    
    secondary: {
      main: '#616161',
    },
    error: {
      main: red.A400,
    },  
    background: {
      default: '#fff',
      paper:'#FFFFFF',
    },
    
  },

  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        // color: 'white',

      },
    },

    MuiInputLabel:{
      
    },
  },


  typography: {
    fontFamily: [
      '"HelveticaNeueW01-65Medi"',
      '"sans-serif"',
    ].join(','),

    //Product title font
    subtitle1:{

      fontFamily: [
        
        '"poppins"',
        '"helvetica neue"',
        '"Arial"',
        '"sans-serif"',
      ].join(','),
      fontSize:'12px',
      fontWeight:600,
      fontStyle:'normal',
      textTransform: 'uppercase',
      letterSpacing: '0.75px',
    },
    h6:{
      fontFamily: [
        '"HelveticaNeue"',
      
      ].join(','),
      fontSize:'11px',
      letterSpacing: '0.75px',
      fontWeight:'normal',
      lineHeight:'0.833',
      fontStyle: 'normal',
      
      
     
    },
    h1:{
      fontFamily: [
        '"Libre Baskerville"',
      
      ].join(','),
      fontSize:'70px',
      letterSpacing: '0.15px',
      fontWeight:540,
      // lineHeight:'1px',
     
      whiteSpace:'nowrap',
    },
    h2:{
      fontFamily: [
        '"Libre Baskerville"',
      
      ].join(','),
      fontSize:'70px',
      letterSpacing: '0.15px',
      fontWeight:700,
      // lineHeight:'1px',
      
      whiteSpace:'nowrap',
    },
    h3:{
      fontFamily: [
        '"HelveticaNeue"',
        '"San Serif"'
      
      ].join(','),
      fontSize:'35px',
      letterSpacing: '1px',
      fontWeight:200,
      lineHeight:'1.8',
      fontStyle: 'normal',
      whiteSpace:'nowrap',
    },

    //Page title font : ex: contact us, FAQs

    h4:{
      fontFamily: [
        '"poppins"',
        '"helvetica neue"',
        '"Arial"',
        '"sans-serif"',
      ].join(','),
      fontSize:'14px',
      letterSpacing: '0.5px',
      fontWeight:500,
      fontStyle:'normal',
    },

    h5:{
      fontFamily: [
        '"HelveticaNeue"',
      
      ].join(','),
      fontSize:'12px',
      letterSpacing: '0.75px',
      fontWeight:'normal',
      lineHeight:'0.833',
      fontStyle: 'normal',
      
      
     
    },
    body1:{
      fontFamily: [
        '"poppins"',
        '"helvetica neue"',
        '"Arial"',
        '"sans-serif"',
      ].join(','),
      fontSize:'12px',
      letterSpacing: '0.5px',
      fontWeight:600,
      fontStyle:'normal',

    },
    body2:{
      fontFamily: [

        '"poppins"',
        '"helvetica neue"',
        '"Arial"',
        '"sans-serif"',
      ].join(','),
      fontSize:'12px',
      fontStyle:'normal',
      fontWeight:'normal',


    },
    button:{
      fontFamily: [

        '"Arial"',
      ].join(','),
      fontSize:'10px',
      fontStyle:'normal',
      fontWeight:'bold',
      letterSpacing: '0.1px',
    }

  },

});

export default theme;
