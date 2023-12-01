import './AuthPage.css'

import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)

    function toggle() {
        setShowSignUp(!showSignUp)
    }

    return (
        <>
            <main className="reg-main">
                <div className="carousel">
                    "placeholder"
                </div>
                <div className='form-container'>
                    <h3>{ showSignUp ? "Sign Up" : "Log In" }</h3>

                    { showSignUp ? ( 
                        <SignUpForm setUser={setUser} /> 
                    ) : ( 
                        <LoginForm setUser={setUser} /> 
                    )}
                    <a href="#" onClick={toggle} className="dark-text"> { showSignUp ? "Already Have an account? Log in Here!" : "Don't Have An Account? Sign Up Here!" } </a>
                </div>
            </main>
        </>
    )
}