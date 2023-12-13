import { LoginForm } from './../../components/form/Forms';
import { PageTitle } from '../../components/PageTitle'

export default function Login() {
    return (
        <div>
            <PageTitle title="Sign in to your TastyBites account" />
            <h1>Login</h1>
            <h2>Let's get you signed in</h2>
            <LoginForm />
        </div>
    );
}