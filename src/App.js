import React ,{ useEffect, useState }from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import Recipes from './Components/Recipes';
import './Components/App.css';


const App = (props) => {
  const APP_ID ='77e6de82';
  const APP_KEY ='91ce1d4684feff6cacc008aa7efce0e8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');


useEffect( () => {
  getRecipes();
},[query]);

  const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

};

const updateSearch = e => {
 setSearch(e.target.value); 
 
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return (
    <div className='App'>
        <MuiThemeProvider>
        <Header /> <br />     
         <form onSubmit={getSearch} className ='search-form'>
           <input className ='search-bar' type='text' value={search}
            onChange={updateSearch} />
           <button className ='search-button' type='submit'> Recipe Search
           </button>
         </form>
         <div className='recipes'>
         
         {recipes.map(recipe => (
           <Recipe 
           key={recipe.recipe.label}
           title={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           button={recipe.recipe.button} />
          
         ))} 
     </div>
     </MuiThemeProvider>
    </div>
    );
  }


export default App;
