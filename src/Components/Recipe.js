import React from 'react'; 
import style from'./recipe.module.css';
import { Link } from 'react-router-dom';

const Recipe = ({title,calories,image,ingredients,button}) => {
    return(
        <div className={style.recipe} >
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img  className={style.image} src={image} alt=''/>
            
            <Link to='/recipes'>
            <button className='ss'>Cafe Detail</button>
            </Link>
            
        </div>
    );
}
export default Recipe;