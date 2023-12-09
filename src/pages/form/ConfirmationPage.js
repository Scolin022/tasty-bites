import { Link } from 'react-router-dom';

export default function SignUpSucessful(){
    return (
        <div>
            <h1>Account Created Sucessfully</h1>
            <h2>
                <Link to="/">Back to Recipes</Link>
            </h2>
        </div>
    );
}