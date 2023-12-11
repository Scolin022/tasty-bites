import { useEffect, useState } from 'react';

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8888/get_recipes.php')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
    return (
    //   <div>
    //     <div><h1>Recipes</h1></div>
    //     <ul>
    //       {recipes.map(recipe => (
    //         <li key={recipe.id}>{recipe.title}</li>
    //       ))}
    //     </ul>
    //   </div>
    <div>
        {recipes.map((recipe) => (
        <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <h2>{recipe.image}</h2>
            <h3>Description</h3>
            <h2>{recipe.description}</h2>
            <h3>Servings</h3>
            <h2>{recipe.servings}</h2>
            <h3>Cook Time</h3>
            <p>{recipe.cook_time}</p>
            <h3>Prep Time</h3>
            <p>{recipe.prep_time}</p>
        </div>
        ))}
        {/* {selectedRecipe && ( 
            <RecipeClicked recipe={selectedRecipe} onClose={closeRecipe} />
        )} */}
    </div>
    );
}