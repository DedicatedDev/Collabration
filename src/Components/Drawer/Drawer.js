import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
  return (
    <div>
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer("left", true) } style = {{padding:'0px'}}><MenuIcon/></IconButton>

          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <div
            className={clsx(classes.list, {
              [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
              <div style  = {{marginTop:"10vh"}}></div>
              
                    <ListItem button key="about_us">
                      <Link href = "/about"><ListItemText primary="About Us" /></Link>
                    </ListItem>
                    <ListItem button key="about_us">
                      <Link href = "/faq"><ListItemText primary="FAQ" /></Link>
                    </ListItem><ListItem button key="about_us">
                      <Link href = "/add_feed"><ListItemText primary="Add Feed" /></Link>
                    </ListItem><ListItem button key="about_us">
                      <Link href = "/retailers"><ListItemText primary="Retailers" /></Link>
                    </ListItem>
              
      
    
              </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
