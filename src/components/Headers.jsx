import { Link } from 'react-router-dom';
import "styles/header.css";

export default function Header() {
    return (
        <header className="header">
            <h1><Link to="/">TastyBites</Link></h1>
            <nav className="nav-bar">
                <Link to="/pages/SavedRecipesPage">Saved Recipes</Link>
                <Link to="/pages/form/AddRecipePage">Add Recipe</Link>
                <Link to="/pages/form/SignUpPage">Sign Up</Link>
                <Link to="/pages/form/AdminLoginPage">Admin Login</Link>
            </nav>
        </header>
    );
}