import { Link } from 'react-router-dom';
import { AdminLoginForm } from './../../components/form/Forms';

export default function LoginAdmin() {
    return (
        <div>
            <div>
                <h1>Admin Login</h1>
                <h2>Enter your information below for administrative functions.</h2>
                <AdminLoginForm />
            </div>
        </div>
    );
}