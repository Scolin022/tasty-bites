import React from 'react';
import './../styles/recipe-clicked.css';

function RecipeClicked({ recipe, onClose }) {
    return (
      <div className="modalBackdrop">
        <div class="modalContent">
            <button className="exitButton" onClick={onClose}>X</button>
            <img src={`http://localhost:8888/uploads/${recipe.image}`} alt={recipe.title} className="recipeImg"/>
                <h2>{recipe.title}</h2>
                <h2>{recipe.description}</h2> 
                <span>Servings: {recipe.servings}</span>
                <div className="tags">
                    <span>Prep Time: {recipe.prep_time}</span>
                    <span>Cook Time: {recipe.cook_time}</span>
                </div>
        </div>
      </div>
    );
}

export default RecipeClicked;