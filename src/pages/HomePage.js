import { useEffect, useState } from 'react';
import { PageTitle } from '../components/PageTitle'
import './../styles/home-page.css';

export default function Home() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8888/get_recipes.php')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    return (
    <div>
        <PageTitle title="TastyBites | Recipe Saving Sharing & Creation" />
        <h1>Recipes Catalog</h1>
        <div className="gallery-container">
            {recipes.map((recipe) => (
            <button key={recipe.id} className="gallery-item">
                <h2>{recipe.image}</h2>
                <h2>{recipe.title}</h2>
                <h3>Description</h3>
                <h2>{recipe.description}</h2>
                <h3>Servings</h3>
                <h2>{recipe.servings}</h2>
                <div className="tags">
                    <span>Prep Time: {recipe.prep_time}</span>
                    <span>Cook Time: {recipe.cook_time}</span>
                </div>
            </button>
            ))}
            {/* <PageTitle title="TastyBites | Recipe Saving Sharing & Creation" />
            <h1>Recipes Catalog</h1>
            {recipes.map((recipe) => (
            <div className="projects-container">
                <div key={recipe.id} className="project">
                <img src={`http://localhost:8888/images/${recipe.image}`} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <p>{recipe.image}</p>
                <h3>Description</h3>
                <h2>{recipe.description}</h2>
                <p>Servings: {recipe.servings}</p>
                <p>Cook Time: {recipe.cook_time}min.</p>
                <p>{recipe.cook_time}</p>
                <p>Prep Time: {recipe.prep_time}min.</p>
            </div>
            </div>
            ))} */}
            {/* {selectedRecipe && ( 
                <RecipeClicked recipe={selectedRecipe} onClose={closeRecipe} />
            )} */}
        </div>
    </div>
    );
}