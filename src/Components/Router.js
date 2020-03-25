 import React from 'react';
 import { BrowserRouter, Switch, Route} from 'react-router-dom';
 import Recipes from './Recipes';
 import App from '../App';

 const Router = () => (
     <BrowserRouter>
     <Switch>
     <Route path='/' component={App} exact />
     <Route path='/recipes' component={Recipes} />
     </Switch>
     </BrowserRouter>
 );
 export default Router;
