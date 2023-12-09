import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [setSignedUp] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
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
                console.log('Data retrieved sucessfully!', data);
                setSignedUp(true);
                navigate('/HomePage');
            })
            .catch(error => {
                console.log('Failed because of ', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label for="username">
                Create username:
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label for="email">
                Email address:
                <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />
            </label>
            <br />
            <label for="password">
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
    ); 
}