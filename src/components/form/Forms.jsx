import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FileUploader } from './FileUploader';
import 'styles/forms.css';





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
                console.log('Data retrieved sucessfully!', data);
                navigate('/ConfirmationPage');
            })
            .catch(error => {
                console.log('Failed because of ', error);
            });
    };

    return (
        <div className="form-container">
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
                        type="password"
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





/////////////////////////////////////////////////////////////////////////////////////////





const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async(e) => {

    };

    if (user) {
        return <div>(user.name} is logged in</div>
    }

    return (
        <div className="form-container">
            <h3>
                Enter your account
            </h3>

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
                        type="password"
                        // value=
                        onChange={(e) => (e.target.value)}
                        required
                    />
                </label>
                <br />

                <button type="submit">
                    Finish
                </button>
            </form>
        </div>
    ); 
}




/////////////////////////////////////////////////////////////////////////////////////////




const InputRecipeForm = () => {
    const [recipeName, setRecipeName] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const [recipeServings, setRecipeServings] = useState('');
    const [recipePrepTime, setRecipePrepTime] = useState('');
    const [recipeCookTime, setRecipeCookTime] = useState('');

    
    const navigate = useNavigate(); 

    const handleFileSelect = (file) => { setSelectedFile(file); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        
        formData.append('title', recipeName);
        formData.append("image", selectedFile);
        formData.append('description', recipeDescription);
        formData.append('servings', recipeServings);
        formData.append('prep-time', recipePrepTime);
        formData.append('cook-time', recipeCookTime);
        fetch('http://localhost:8888/add_recipe.php' , {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                console.log('Data retrieved sucessfully!', data);
                console.log(formData);
                console.log(data);
                navigate('/ConfirmationPage');
            })
            .catch(error => {
                console.log('Failed because of ', error);
            });
    };

    return (
        <div className="form-container">
            <h3>
                Create your own recipe
            </h3>

            <h4>
                General Overview
            </h4>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="title">
                    Recipe Name
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label htmlFor="description">
                    Brief Description
                    <input
                        type="text"
                        value={recipeDescription}
                        onChange={(e) => setRecipeDescription(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label htmlFor="servings">
                    Servings
                    <input
                        type="text"
                        onChange={(e) => setRecipeServings(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label htmlFor="prep-time">
                    Estimated Preparation Time
                    <input
                        type="text"
                        value={recipePrepTime}
                        onChange={(e) => setRecipePrepTime(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label htmlFor="cook-time">
                    Estimated Cook Time
                    <input
                        type="text"
                        value={recipeCookTime}
                        onChange={(e) => setRecipeCookTime(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label htmlFor="image">
                    Upload Recipe Image
                    <FileUploader onFileSelect={handleFileSelect} />
                </label>
                <br />
                
                {/* <label htmlFor="ingredients">
                    Ingredients
                    <input
                        type="text"
                        value={recipeCookTime}
                        onChange={(e) => setRecipeCookTime(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label htmlFor="instructions">
                    Instructions
                    <input
                        type="text"
                        value={recipeCookTime}
                        onChange={(e) => setRecipeCookTime(e.target.value)}
                        required
                    />
                </label>
                <br /> */}

                <button type="submit" onSubmit={handleSubmit}>
                    Add Recipe
                </button>
            </form>
        </div>
    ); 
}




/////////////////////////////////////////////////////////////////////////////////////////




function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setSubmissionMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = { name, email, message };
            const response = await fetch('http://localhost:8888/contact_us.phps', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setSubmissionMessage(data.message);
        } catch (error) {
            setSubmissionMessage('An error occurred while sending your message.');
        }
    };      

    if (formSubmitted) {
        return <div>
                    Thank you, {name}, for submitting your information. 
                    We have processed your account successfully and will be in touch with you at {email}.
                </div>
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>
                        What Can We Help You With?
                    </h1>
                </div>

                <label htmlFor="text">
                    Name
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    />
                </label>
                <br />

                <label htmlFor="email">
                    Email
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    />
                </label>
                <br />

                <label htmlFor="message">
                    Your Message
                    <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                    />
                </label>
                <br />

                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>

    );
}




/////////////////////////////////////////////////////////////////////////////////////////




    const AdminLoginForm = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate(); 
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:8888/admin_login.php', { username, password });
                if (response.data.success) {
                    navigate('/ConfirmationPage');
                }
            } catch (error) {
                console.error('Login failed', error);
            }
        };

        return (
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" style={{ display: 'none' }} /> {/* Honeypot */}
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        );
    };

export {RegistrationForm};
export {LoginForm};
export {ContactForm};
export {InputRecipeForm};
export {AdminLoginForm};