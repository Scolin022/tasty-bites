import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1><Link to="/">TastyBites</Link></h1>
            <nav>
                <Link to="#">Saved Recipes</Link>
                <Link to="#">Login</Link>
                <Link to="/users/account/SignUpPage">Sign Up</Link>
            </nav>
        </header>
    );
}