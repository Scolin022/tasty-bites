import { Link } from 'react-router-dom';

export default function SignUpSucessful(){
    return (
        <div>
            <div>
                <h1>
                    Submission Sucessful
                </h1>
            </div>
            <div>
                <h2>
                    <Link to="/">Back to Recipes</Link>
                </h2>
            </div>
        </div>
    );
}