import React from 'react';
import ProdcutArea from '../Components/ProductArea/ProductArea'
import MenuBar from '../Components/MenuBar/MenuBar'

export default function App() {

  return (
      <React.Fragment>
          <div style = {{width:'100%',height:'100%'}}>
            <div style = {{zIndex:3}}>
                <MenuBar/>  
            </div>
            <div >
                <ProdcutArea/>
            </div> 
          </div>
      </React.Fragment>
        
  );
}
