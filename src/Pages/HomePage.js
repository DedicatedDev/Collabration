import React,{useState} from 'react';

import SearchBar from '../Components/SearchBar/SearchBar'
import { Grid } from '@material-ui/core';
export default function HomePage(){
  return(
      // <Container maxWidth ="sm" style = {{ minHeight: '100vh'}} >
    <React.Fragment>
              <div style = {{height:"30vh"}}></div>
            <SearchBar/>
    </React.Fragment>
      
  );

}
