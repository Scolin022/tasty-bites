import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link to="/">TastyBites</Link></h1>
            <nav>
                <Link to="/pages/SavedRecipesPage">Saved Recipes</Link>
                <Link to="/pages/form/AddRecipePage">Add Recipe</Link>
                <Link to="/pages/form/LoginPage">Login</Link>
                <Link to="/pages/form/SignUpPage">Sign Up</Link>
            </nav>
        </header>
    );
}