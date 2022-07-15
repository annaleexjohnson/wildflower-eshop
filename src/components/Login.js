import React, {useState} from 'react'
import '../styles/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from '../Firebase';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/home')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    navigate('/home');
                }
            })
            .catch(error => alert(error.message))
    }

    return(
        <div className="login__screenContainer">
            <div className="login">
                <Link to='/home'> 
                    <div className="login__logo">
                        <h2 className="login__logoTitle">Wildflower</h2>
                    </div>
                </Link>
               

                <div className="login__container">
                    <span>Welcome back! Please sign in to continue.</span>
                    <h1>Sign-in</h1>

                    <form className="login__form">
                        <h5>E-mail</h5>
                        <input className="login__formInput" type="text" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input className="login__formInput" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />

                        <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                    </form>

                    <button className="login__registerButton" onClick={register}>Sign-up for an Account</button>
                    <p>Disclaimer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus ducimus accusamus maxime recusandae voluptatum voluptates! Hic reprehenderit similique quidem unde est ad illo in omnis. Ipsum possimus labore sit.</p>

                </div>
            </div>

            <div className="login__screenImage"></div>
        </div>
        
    )
}