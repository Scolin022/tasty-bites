import { useEffect, useState } from 'react';
import { PageTitle } from '../components/PageTitle'
import RecipeClicked from '../components/Recipe';
import './../styles/home-page.css';


export default function Home() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const openRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const closeRecipe = () => {
        setSelectedRecipe(null);
    };

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
                <button key={recipe.id} onClick={() => openRecipe(recipe)} className="gallery-item">
                    <img src={`http://localhost:8888/uploads/${recipe.image}`} alt={recipe.title} className="project-image"/>
                    <h2>{recipe.title}</h2>
                    <span>Servings: {recipe.servings}</span>
                    <div className="tags">
                        <span>Prep Time: {recipe.prep_time}</span>
                        <span>Cook Time: {recipe.cook_time}</span>
                    </div>
                </button>
            ))}
            {selectedRecipe && ( 
                <RecipeClicked recipe={selectedRecipe} onClose={closeRecipe} />
            )}
        </div>
    </div>
    );
}