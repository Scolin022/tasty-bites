import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new URLSearchParams();
        
        formData.append('username', userName);
        formData.append('email', userEmail);
        formData.append('password', userPassword);

        fetch('http://localhost:8888/register.php' , {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                 // show user account information
                console.log('Data retrieved sucessfully!', data);

                // loads when account is processed sucessfully
                navigate('/ConfirmationPage');
            })
            .catch(error => {
                console.log('Failed because of ', error);
            });
    };

    return (
        <div>
            <h3>Create your account</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Create username:
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label htmlFor="email">
                    Email address:
                    <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label htmlFor="password">
                    Create password:
                    <input
                        type="text"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Finish</button>
            </form>
        </div>
    ); 
}

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async(e) => {

    };

    // if there is a user, then shows message
    if (user) {
        return <div>(user.name} is logged in</div>
    }

    // if not, login form shown
    return (
        <div>
            <h3>Enter your account</h3>
            <form>
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        // value=
                        onChange={(e) => (e.target.value)}
                        required
                    />
                </label>
                <br />
                <label htmlFor="password">
                    Password
                    <input
                        type="text"
                        // value=
                        onChange={(e) => (e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Finish</button>
            </form>
        </div>
    ); 
}

export {RegistrationForm};
export {LoginForm};