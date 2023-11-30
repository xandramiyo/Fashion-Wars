import { Link } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

import HomePage from "../HomePage/HomePage"

export default function AuthPage({ user, setUser }) {
    return (
        <>
            <>
            </>
            <main>
                {
                    user ?
                    <Link to="/" />
                    :
                    <>
                        <SignUpForm setUser={setUser} />
                        <LoginForm setUser={setUser} />
                        <a></a>
                    </>
                }
            </main>
        </>
    )
}