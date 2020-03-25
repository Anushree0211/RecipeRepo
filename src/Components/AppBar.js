
import React,{Component} from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class AppBar extends Component{
    render(){
    console.log(this)
    return(this.CardExampleWithAvatar())
    }


  CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="Village Cafe"
      subtitle="cafe"
      avatar="logo.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="With the new day comes new strength and new thoughts" subtitle="Village Cafe" />}
    >
      <img src='video.jpg' alt='' width="20" height="500"  crop="fill" />
    </CardMedia>
    <CardTitle title="village cafe" subtitle="food" />
    <CardText>
    Your restaurant description gives potential customers a window into what it’s like to dine at your restaurant. 
    Similar to an “About” section on a website, this is a great place to include your mission statement and values.
    You can use the space to talk about anything, but we recommend starting with what the experience of eating at your restaurant is like, 
    what influences the cuisine, or spotlighting any signature dishes. Your restaurant description shouldn’t be long —
    you only have 700 amount of characters after all — but it should give customers a good idea of why your restaurant is different or special. Stumped about what to include?
    Take a look at our restaurant branding guide or your mission statement for inspiration and expand from there
    
    </CardText>
   
  </Card>
);

  }