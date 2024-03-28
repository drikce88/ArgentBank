import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

export default function SignForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const { success } = await dispatch(login({ email: username, password }));
            // Si la connexion réussit, rediriger vers la page User
            if (success) {
                navigate('/User');
            } else {
                // Afficher un message d'erreur
                setError('Invalid username or password.');
            }
        } catch (error) {
            // Afficher un message d'erreur en cas d'échec de la requête
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSignIn}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
}