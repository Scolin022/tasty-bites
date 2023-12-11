import { Link } from 'react-router-dom';
import { RegistrationForm } from './../../components/form/Forms.jsx';

export default function SignUp() {
    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <h2>Enter your information below to get signed up today!</h2>
                <p>Hundreds of Delicious Recipes, Right at your Fingertips.</p>
                <RegistrationForm />
            </div>
            <div>
                <h4>Already have an account?</h4>
                <Link to="/pages/form/LoginPage">Login</Link>
            </div>
        </div>
    );
}