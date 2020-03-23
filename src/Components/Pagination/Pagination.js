import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(5),
      display:'flex',
      flexDirection:"row-reverse",
      minWidth:'980px',
      maxWidth:'1284px',
      width:'100%',
      margin:'auto',
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={10} shape="rounded" />
{/*      <Pagination count={10} variant="outlined" shape="rounded" />*/}
    </div>
  );
}