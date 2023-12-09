import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>TastyBites</h1>
            <nav>
                <Link to="#">Saved Recipes</Link>
                <Link to="#">Login</Link>
                <Link to="./RegisterForm">Sign Up</Link>
            </nav>
        </header>
    );
}