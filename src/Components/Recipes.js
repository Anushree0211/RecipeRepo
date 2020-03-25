import React,{Component} from 'react';
import AppBar from './AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Recipes extends  Component {
    render(){
      return (
       <MuiThemeProvider >
             <AppBar />
             <div>
       Thankyou!!!!
            </div>
        
      </MuiThemeProvider>
    )
  }
}

export default Recipes;