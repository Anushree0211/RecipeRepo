import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';


export default class Header extends Component{
    render(){
        console.log(this)
        return(this.AppBarExampleIcon()
    
        )
      }
 AppBarExampleIcon = () => (
  <AppBar
    title="Village Cafe"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);
 }
